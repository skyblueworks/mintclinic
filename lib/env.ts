/**
 * Environment Variables Configuration
 *
 * Centralized environment variable management with validation and type safety.
 * This ensures all required environment variables are present and properly typed.
 */

/**
 * Get an environment variable with optional fallback
 */
function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key];

  if (!value && !fallback) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value || fallback || "";
}

/**
 * Get an optional environment variable
 */
function getOptionalEnvVar(key: string, fallback?: string): string | undefined {
  return process.env[key] || fallback;
}

/**
 * Sanity CMS Configuration
 */
export const sanity = {
  projectId: getEnvVar("NEXT_PUBLIC_SANITY_PROJECT_ID", "wtcdboyg"),
  dataset: getEnvVar("NEXT_PUBLIC_SANITY_DATASET", "production"),
  apiVersion: getEnvVar("NEXT_PUBLIC_SANITY_API_VERSION", "2025-09-29"),

  // API Tokens (server-side only)
  writeToken: getOptionalEnvVar("SANITY_API_WRITE_TOKEN"),
  readToken: getOptionalEnvVar("SANITY_API_READ_TOKEN"),
} as const;

/**
 * Application Environment
 */
export const app = {
  nodeEnv: getEnvVar("NODE_ENV", "development"),
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;

/**
 * Validate all required environment variables are present
 * Call this at application startup to catch configuration issues early
 */
export function validateEnv(): void {
  try {
    // Validate required public variables
    getEnvVar("NEXT_PUBLIC_SANITY_PROJECT_ID");
    getEnvVar("NEXT_PUBLIC_SANITY_DATASET");
    getEnvVar("NEXT_PUBLIC_SANITY_API_VERSION");

    console.log("✓ Environment variables validated successfully");
  } catch (error) {
    console.error("✗ Environment validation failed:", error);
    throw error;
  }
}

// Export all environment variables as a single object for convenience
export const env = {
  sanity,
  app,
} as const;

// Default export
export default env;
