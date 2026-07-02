const ALLOWED_DOMAINS = new Set(['luma.com', 'lu.ma']);

export function isAllowedLumaUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    return ALLOWED_DOMAINS.has(new URL(url).hostname.replace('www.', ''));
  } catch {
    return false;
  }
}

export function sanitizeEventUrl(url: string | undefined, fallbackUrl: string): string {
  return url && isAllowedLumaUrl(url) ? url : fallbackUrl;
}
