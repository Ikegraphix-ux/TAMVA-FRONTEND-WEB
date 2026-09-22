/**
 * Base API client abstraction.
 *
 * This is a thin wrapper around fetch, pointed at NEXT_PUBLIC_API_URL.
 * Until real backend endpoints are supplied, individual services (see
 * ./products.ts, ./contact.ts) fall back to local placeholder data so the
 * UI can be built and reviewed independently of the backend.
 *
 * When the real API is ready: implement the fetch call in each service
 * file and remove its placeholder fallback — the UI components do not
 * need to change.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError(
      "NEXT_PUBLIC_API_URL is not configured; using placeholder data."
    );
  }

  const { timeoutMs = 10_000, ...init } = options;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...init.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(`Request to ${path} failed`, response.status);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}
