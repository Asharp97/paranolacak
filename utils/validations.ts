export function validateGSM(value) {
  // Remove any non-digit characters for simplicity

  // Validate Turkish GSM Number
  const gsmRegex = /^(?:90|0)?5\d{9}$/; // Matches +905XXXXXXXX or 05XXXXXXXX
  if (gsmRegex.test(value) || !value) {
    return { isValid: true, error: null, type: "GSM", value: value };
  }

  if (/^\d+$/.test(value) && value.toString().length == 11) {
    return { isValid: true, error: null, type: "TCKN" };
  } else
    return {
      isValid: false,
      error: "Geçersiz TCKN veya GSM.",
      type: "Unknown",
    };
}

export function validatePassword(password: string): {
  isValid: boolean;
  error: string | null;
} {
  if (!password) return { isValid: false, error: null };
  if (password.length < 6) {
    return {
      isValid: false,
      error: "Şifre en az 6 karakter uzunluğunda olmalıdır.",
    };
  }

  return { isValid: true, error: null };
}
