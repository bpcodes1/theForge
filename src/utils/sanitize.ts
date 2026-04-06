/**
 * Strips HTML tags and dangerous patterns from user input.
 * React already escapes JSX output, but this prevents raw injection
 * if data is ever forwarded to a backend or email.
 */
export function sanitize(value: string): string {
  return value
    .replace(/<[^>]*>/g, '')          // strip HTML tags
    .replace(/javascript:/gi, '')      // strip js protocol
    .replace(/on\w+\s*=/gi, '')        // strip inline event handlers
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

export function isValidPhone(phone: string): boolean {
  return phone.trim() === '' || /^[\d\s\-().+]{7,20}$/.test(phone.trim())
}
