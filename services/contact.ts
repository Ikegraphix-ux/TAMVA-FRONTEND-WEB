import { apiRequest } from "./api";

export interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: true }> {
  await apiRequest<{ ok: true }>("/public/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return { ok: true };
}
