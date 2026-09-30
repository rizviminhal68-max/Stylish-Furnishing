import { MessageCircle, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { site, whatsappLink } from '@/config/site';
import { ButtonLink, type ButtonSize, type ButtonVariant } from './ButtonLink';

type Common = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  eventLabel: string;
  children?: ReactNode;
  message?: string;
};

/** "Call Now" — dials the client's number. */
export function CallButton({
  size = 'md',
  variant = 'primary',
  className,
  eventLabel,
  children = 'Call Now',
}: Common) {
  return (
    <ButtonLink
      to={site.phone.href}
      variant={variant}
      size={size}
      className={className}
      event="phone_click"
      eventLabel={eventLabel}
      ariaLabel={`Call Stylish Furnishing on ${site.phone.display}`}
      icon={<Phone className="size-[1.05em] shrink-0" aria-hidden="true" />}
    >
      {children}
    </ButtonLink>
  );
}

/** "WhatsApp Us" — opens wa.me with a pre-filled message. */
export function WhatsappButton({
  size = 'md',
  variant = 'whatsapp',
  className,
  eventLabel,
  children = 'WhatsApp Us',
  message,
}: Common) {
  return (
    <ButtonLink
      to={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      event="whatsapp_click"
      eventLabel={eventLabel}
      ariaLabel="Send a WhatsApp message to Stylish Furnishing"
      icon={<MessageCircle className="size-[1.05em] shrink-0" aria-hidden="true" />}
    >
      {children}
    </ButtonLink>
  );
}
