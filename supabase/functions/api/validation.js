export class HttpError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
export const statuses = ['New', 'Contacted', 'Follow Up', 'Interested', 'Not Interested', 'Converted'];
export function field(value, max, required = true) {
  if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) {
    throw new HttpError(400, 'Please enter valid details.');
  }
  return value.trim();
}
export function email(value) {
  const result = field(value, 254).toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(result)) throw new HttpError(400, 'Enter a valid email address.');
  return result;
}
export function password(value) {
  if (typeof value !== 'string' || value.length < 12 || value.length > 128) throw new HttpError(400, 'Use a password between 12 and 128 characters.');
  return value;
}
export function date(value, optional = false) {
  if (!value && optional) return null;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) {
    throw new HttpError(400, 'Invalid date.');
  }
  return value;
}
export function leadUpdate(body) {
  if (!statuses.includes(body.status)) throw new HttpError(400, 'Invalid lead status.');
  return { status: body.status, notes: field(body.notes, 10000, false), followUp: date(body.followUp, true) };
}
export function normalizeLead(body, admin = false) {
  const phone = field(body.phone ?? body.mobile, 20);
  if (!/^\d{10}$/.test(phone)) throw new HttpError(400, 'Enter a valid 10-digit phone number.');
  return {
    customer: field(body.customer ?? body.fullName, 150), phone,
    city: field(body.city ?? body.location, 150), service: field(body.service ?? body.purpose, 255),
    source: admin ? field(body.source ?? 'Website', 255) : 'Website',
    date: admin ? date(body.date ?? new Date().toISOString().slice(0, 10)) : new Date().toISOString().slice(0, 10),
    ...(admin ? leadUpdate({ status: body.status ?? 'New', notes: body.notes ?? '', followUp: body.followUp }) : { status: 'New', notes: '', followUp: null }),
  };
}
export function leadId(value, formatted = true) {
  if (!(formatted ? /^L\d+$/ : /^\d+$/).test(value)) throw new HttpError(400, 'Invalid lead ID.');
  const result = Number(formatted ? value.slice(1) : value);
  if (!Number.isSafeInteger(result) || result <= 0) throw new HttpError(400, 'Invalid lead ID.');
  return result;
}
export function uuid(value) {
  if (typeof value !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) throw new HttpError(400, 'Invalid account ID.');
  return value;
}
