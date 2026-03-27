/// <reference types="vite/client" />

const BASE = import.meta.env.BASE_URL

/**
 * Resolves a public/images/* path against the Vite base URL.
 * Usage: img('foo.jpg') → '/theForge/images/foo.jpg'
 */
export function img(filename: string): string {
  return `${BASE}images/${filename}`
}