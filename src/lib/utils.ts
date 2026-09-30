import { site } from '@/config/site';

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

/** Phone digits only, e.g. "919599931360" — used for tel: and wa.me links. */
export const phoneDigits = site.phone.national;
export const whatsappDigits = site.whatsapp.number;

export const ctaData = {
  phone: { event: 'phone_click', label: 'phone_click' },
  whatsapp: { event: 'whatsapp_click', label: 'whatsapp_click' },
} as const;
