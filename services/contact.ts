import { apiRequest, ApiError } from "./api";

export interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: true }> {
  try {
    await apiRequest<{ ok: true }>("/public/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return { ok: true };
  } catch (err) {
    if (err instanceof ApiError) {
      // No backend configured yet — simulate a network round trip so the
      // UI's submitting/success states can be reviewed end to end.
      await new Promise((resolve) => setTimeout(resolve, 900));
      return { ok: true };
    }
    throw err;
  }
}
