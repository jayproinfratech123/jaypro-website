import { API_URL, requireSupabaseConfig } from "./config";

export async function submitLead(fields) {
  try {
    requireSupabaseConfig();
    const response = await fetch(`${API_URL}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const text = await response.text();

    let result = {};

    if (text) {
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(
          `Server returned an invalid response (${response.status}).`
        );
      }
    }

    if (!response.ok) {
      throw new Error(
        result.message ||
        `Server error (${response.status}).`
      );
    }

    if (!result.success) {
      throw new Error(
        result.message ||
        "Unable to submit your enquiry."
      );
    }

    return result;

  } catch (error) {
    console.error(
      "Lead submission failed:",
      error
    );

    throw error;
  }
}
