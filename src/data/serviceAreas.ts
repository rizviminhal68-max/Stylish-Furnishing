/**
 * ------------------------------------------------------------------
 * SERVICE AREA — EDIT HERE
 * ------------------------------------------------------------------
 * Used for the service-area section, the footer and the LocalBusiness
 * structured data. Listed as real neighbourhoods the business covers —
 * remove any area that is not actually served, and do not add new
 * "location" pages for these without genuine content for each one.
 */

export const serviceAreas = {
  primary: 'Gurugram, Haryana',
  secondary: 'Gurgaon',
  /** Grouped for layout only — not separate pages. */
  areas: [
    'Golf Course Road',
    'Golf Course Extension Road',
    'DLF Phase 1',
    'DLF Phase 2',
    'DLF Phase 3',
    'DLF Phase 4',
    'DLF Phase 5',
    'Sector 14',
    'Sector 15',
    'Sector 21',
    'Sector 22',
    'Sector 23',
    'Sector 40',
    'Sector 43',
    'Sector 45',
    'Sector 46',
    'Sector 47',
    'Sector 49',
    'Sector 50',
    'Sector 56',
    'Sector 57',
    'Sector 58',
    'Sohna Road',
    'New Gurgaon',
  ],
} as const;
