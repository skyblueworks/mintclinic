/**
 * Team Data Types
 *
 * Certificate data has been migrated to Sanity CMS.
 * See: scripts/import_certificates_to_sanity.py
 */

/**
 * @deprecated Use SanityCertificate from lib/types/sanity.ts instead.
 * This interface is kept for backwards compatibility.
 */
export interface Certificate {
  image: string;
  title: string;
  lecturer: string;
  location: string;
  date: string;
}
