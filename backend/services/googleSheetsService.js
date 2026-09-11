import sheets from "../config/googleSheets.js";

const spreadsheetId = process.env.GOOGLE_SHEET_ID;

export const getAllLeads = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Leads!A:N",
  });

  return response.data.values || [];
};

export const getEmployees = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Employees!A:G",
  });

  return response.data.values || [];
};