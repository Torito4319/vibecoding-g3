import { Resend } from "resend";

let resendClient = null;

// #region agent log
fetch("http://127.0.0.1:7635/ingest/7d6d1df9-021e-482f-be84-0e1688659c30", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "388e48",
  },
  body: JSON.stringify({
    sessionId: "388e48",
    location: "resend.js:module-load",
    message: "resend module imported",
    data: {
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      apiKeyLength: process.env.RESEND_API_KEY?.length ?? 0,
    },
    timestamp: Date.now(),
    hypothesisId: "A-B",
  }),
}).catch(() => {});
// #endregion

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  // #region agent log
  fetch("http://127.0.0.1:7635/ingest/7d6d1df9-021e-482f-be84-0e1688659c30", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "388e48",
    },
    body: JSON.stringify({
      sessionId: "388e48",
      location: "resend.js:getResend",
      message: "getResend called",
      data: {
        hasApiKey: Boolean(apiKey),
        clientAlreadyCreated: Boolean(resendClient),
      },
      timestamp: Date.now(),
      hypothesisId: "B-C",
    }),
  }).catch(() => {});
  // #endregion

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}
