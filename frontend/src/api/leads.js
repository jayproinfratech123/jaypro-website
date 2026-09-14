import { API_URL } from './config';
export async function submitLead(fields) {
  const response = await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result.message || 'Unable to submit your enquiry.');
  return result;
}
