import { products, getProduct as getLocalProduct } from "@/lib/content";
import type { ProductDetail } from "@/lib/types";
import { apiRequest, ApiError, isApiConfigured } from "./api";

export async function fetchProducts(): Promise<ProductDetail[]> {
  if (!isApiConfigured()) return products;
  try {
    return await apiRequest<ProductDetail[]>("/public/products");
  } catch (error) {
    return products;
  }
}

export async function fetchProduct(slug: string): Promise<ProductDetail | undefined> {
  if (!isApiConfigured()) return getLocalProduct(slug);
  try {
    return await apiRequest<ProductDetail>(`/public/products/${slug}`);
  } catch (error) {
    return getLocalProduct(slug);
  }
}
