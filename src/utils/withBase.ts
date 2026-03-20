export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.replace(/^\//, "");

  if (normalizedPath.length === 0) {
    return base;
  }

  return `${base}${normalizedPath}`;
}
