import { NextResponse } from "next/server";
import { getResend } from "@/libs/resend";
import { addRowToSheet } from "@/libs/google-sheets";
import { siteConfig } from "@/config/site";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El formulario enviado no tiene el formato correcto." },
      { status: 400 }
    );
  }

  const { nombre, apellido, correo, telefono, industria, comentarios } = body;

  if (!nombre?.trim()) {
    return NextResponse.json(
      { error: "El nombre es requerido." },
      { status: 400 }
    );
  }
  if (!apellido?.trim()) {
    return NextResponse.json(
      { error: "El apellido es requerido." },
      { status: 400 }
    );
  }
  if (!correo?.trim()) {
    return NextResponse.json(
      { error: "El correo es requerido." },
      { status: 400 }
    );
  }
  if (!isValidEmail(correo)) {
    return NextResponse.json(
      { error: "El correo no tiene un formato valido." },
      { status: 400 }
    );
  }
  if (!telefono?.trim()) {
    return NextResponse.json(
      { error: "El telefono es requerido." },
      { status: 400 }
    );
  }
  if (!industria?.trim()) {
    return NextResponse.json(
      { error: "La industria es requerida." },
      { status: 400 }
    );
  }
  if (!comentarios?.trim()) {
    return NextResponse.json(
      { error: "Los comentarios son requeridos." },
      { status: 400 }
    );
  }

  try {
    const sheetResult = await addRowToSheet({ nombre, apellido, correo, telefono, industria, comentarios });
    // #region agent log
    fetch("http://127.0.0.1:7934/ingest/bbd9b0e9-28d1-4c97-8f30-ce6baa0c0de5", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "596781" },
      body: JSON.stringify({
        sessionId: "596781",
        location: "route.js:POST:sheets-ok",
        message: "row saved to google sheets",
        data: {
          sheetIdSet: Boolean(process.env.GOOGLE_SHEET_ID),
          headers: sheetResult.headers,
          matchedColumns: sheetResult.matchedColumns,
        },
        timestamp: Date.now(),
        hypothesisId: "B",
        runId: "post-fix",
      }),
    }).catch(() => {});
    // #endregion
  } catch (error) {
    const status = error.response?.status || error.status;
    const is403 = status === 403 || String(error.message || "").includes("403");
    // #region agent log
    fetch("http://127.0.0.1:7934/ingest/bbd9b0e9-28d1-4c97-8f30-ce6baa0c0de5", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "596781" },
      body: JSON.stringify({
        sessionId: "596781",
        location: "route.js:POST:sheets-error",
        message: "google sheets save failed",
        data: {
          status,
          is403,
          errorMessage: error.message,
          sheetIdSet: Boolean(process.env.GOOGLE_SHEET_ID),
        },
        timestamp: Date.now(),
        hypothesisId: "A",
        runId: "post-fix",
      }),
    }).catch(() => {});
    // #endregion
    console.error("Error al guardar en Google Sheets:", error);
    if (is403) {
      const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "tu cuenta de servicio";
      return NextResponse.json(
        {
          error: `La hoja de Google no tiene permisos. Abre tu hoja, haz clic en Compartir y agrega este email como Editor: ${serviceEmail}`,
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "No pudimos guardar tu mensaje. Intentalo de nuevo en unos minutos." },
      { status: 500 }
    );
  }

  try {
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || siteConfig.email.from,
      to: correo,
      subject: siteConfig.email.subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #4f46e5;">Hola ${escapeHtml(nombre)},</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          <p style="color: #666;">Telefono: <strong>${escapeHtml(telefono)}</strong></p>
          <p style="color: #666;">Industria: <strong>${escapeHtml(industria)}</strong></p>
          <p style="color: #666; margin-top: 24px;">Tus comentarios:</p>
          <blockquote style="border-left: 3px solid #4f46e5; padding-left: 16px; color: #444; margin: 8px 0;">
            ${escapeHtml(comentarios)}
          </blockquote>
          <p style="color: #999; font-size: 14px; margin-top: 32px;">
            — ${escapeHtml(siteConfig.email.teamSignature)}
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error al enviar email de confirmacion:", error);
  }

  return NextResponse.json({ success: true });
}
