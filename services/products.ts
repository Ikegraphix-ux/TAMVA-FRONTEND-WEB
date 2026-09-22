import { products, getProduct as getPlaceholderProduct } from "@/lib/content";
import type { ProductDetail } from "@/lib/types";
import { apiRequest, ApiError } from "./api";

export async function fetchProducts(): Promise<ProductDetail[]> {
  try {
    return await apiRequest<ProductDetail[]>("/public/products");
  } catch (err) {
    if (err instanceof ApiError) return products;
    throw err;
  }
}

export async function fetchProduct(slug: string): Promise<ProductDetail | undefined> {
  try {
    return await apiRequest<ProductDetail>(`/public/products/${slug}`);
  } catch (err) {
    if (err instanceof ApiError) return getPlaceholderProduct(slug);
    throw err;
  }
}
