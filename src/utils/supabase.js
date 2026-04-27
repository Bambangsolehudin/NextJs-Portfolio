import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

function isValidHttpUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function decodeBase64(value) {
  if (typeof window !== "undefined") {
    return window.atob(value);
  }

  return Buffer.from(value, "base64").toString("utf-8");
}

function deriveProjectUrlFromAnonKey(key) {
  if (!key || !key.includes(".")) return null;

  try {
    const payload = JSON.parse(decodeBase64(key.split(".")[1]));
    const projectRef = payload?.ref;

    if (!projectRef) return null;

    return `https://${projectRef}.supabase.co`;
  } catch {
    return null;
  }
}

const resolvedSupabaseUrl = isValidHttpUrl(SUPABASE_URL)
  ? SUPABASE_URL
  : deriveProjectUrlFromAnonKey(SUPABASE_KEY);

// Logging for debugging
if (process.env.NODE_ENV !== "production") {
  if (!SUPABASE_URL) {
    console.warn(
      "[Supabase] NEXT_PUBLIC_SUPABASE_URL environment variable is missing"
    );
  }
  if (!SUPABASE_KEY) {
    console.warn(
      "[Supabase] NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is missing"
    );
  }
  if (!isValidHttpUrl(SUPABASE_URL)) {
    console.warn(
      "[Supabase] Attempting to derive URL from anon key. Set NEXT_PUBLIC_SUPABASE_URL for better reliability."
    );
  }
}

const supabase =
  resolvedSupabaseUrl && SUPABASE_KEY
    ? createClient(resolvedSupabaseUrl, SUPABASE_KEY)
    : null;

// Additional validation in development
if (!supabase && process.env.NODE_ENV !== "production") {
  console.error(
    "[Supabase] Client initialization failed. Please ensure both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env.local file."
  );
}

export default supabase;
