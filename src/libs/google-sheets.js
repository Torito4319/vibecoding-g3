import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

function getAuth() {
  return new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function findHeader(headers, ...aliases) {
  for (const alias of aliases) {
    const found = headers.find((h) => h.toLowerCase() === alias.toLowerCase());
    if (found) return found;
  }
  return null;
}

function getCell(row, headers, ...aliases) {
  const header = findHeader(headers, ...aliases);
  return header ? row.get(header) || "" : "";
}

export async function getLeads() {
  const auth = getAuth();
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadHeaderRow();
  const headers = sheet.headerValues;
  const rows = await sheet.getRows();
  return rows.map((row) => ({
    fecha: getCell(row, headers, "Fecha"),
    nombre: getCell(row, headers, "Nombre"),
    apellido: getCell(row, headers, "Apellido"),
    email: getCell(row, headers, "Email", "Correo"),
    telefono: getCell(row, headers, "Telefono", "Teléfono"),
    industria: getCell(row, headers, "Industria"),
    comentarios: getCell(row, headers, "Comentarios", "Mensaje"),
  }));
}

export async function addRowToSheet({
  nombre,
  apellido,
  correo,
  telefono,
  industria,
  comentarios,
}) {
  const auth = getAuth();
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadHeaderRow();
  const headers = sheet.headerValues;

  const rowData = {};
  const fechaCol = findHeader(headers, "Fecha");
  const nombreCol = findHeader(headers, "Nombre");
  const apellidoCol = findHeader(headers, "Apellido");
  const correoCol = findHeader(headers, "Email", "Correo");
  const telefonoCol = findHeader(headers, "Telefono", "Teléfono");
  const industriaCol = findHeader(headers, "Industria");
  const comentariosCol = findHeader(headers, "Comentarios", "Mensaje");

  if (fechaCol) rowData[fechaCol] = new Date().toLocaleString("es-MX");
  if (nombreCol) rowData[nombreCol] = nombre;
  if (apellidoCol) rowData[apellidoCol] = apellido;
  if (correoCol) rowData[correoCol] = correo;
  if (telefonoCol) rowData[telefonoCol] = telefono || "";
  if (industriaCol) rowData[industriaCol] = industria;
  if (comentariosCol) rowData[comentariosCol] = comentarios;

  await sheet.addRow(rowData);

  return { headers, matchedColumns: Object.keys(rowData) };
}
