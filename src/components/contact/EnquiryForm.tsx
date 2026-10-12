import { useState, type FormEvent } from 'react';
import { LoaderCircle, Send, ShieldCheck } from 'lucide-react';
import { site, whatsappLink } from '@/config/site';
import { serviceOptions } from '@/data/services';
import { trackEvent } from '@/lib/analytics';
import { cx } from '@/lib/utils';

export type EnquiryPayload = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * ------------------------------------------------------------------
 * WHERE SUBMITTED ENQUIRIES GO
 * ------------------------------------------------------------------
 * There is NO backend and NO email service connected to this project,
 * so the form does not pretend to deliver anything.
 *
 * Right now, submitting the form opens WhatsApp with the details
 * pre-filled, so the enquiry reaches the client immediately and
 * nothing is lost.
 *
 * TO CONNECT A REAL BACKEND LATER (Formspree, a Google Form, your own
 * API endpoint, a Netlify/Vercel function â€” anything):
 *   1. Fill in `sendEnquiry` below with a real request.
 *   2. Return { delivered: true } once the request succeeds.
 *   3. The form will then show a real "thank you" state instead of
 *      opening WhatsApp. No other changes are needed.
 */
async function sendEnquiry(_payload: EnquiryPayload): Promise<{ delivered: boolean }> {
  // No endpoint configured yet.
  return { delivered: false };
}

type Errors = Partial<Record<keyof EnquiryPayload, string>>;

function validate(values: EnquiryPayload): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  const digits = values.phone.replace(/\D/g, '');
  const local = digits.replace(/^(0|91)/, '');
  if (!digits) {
    errors.phone = 'Please enter your phone number.';
  } else if (local.length !== 10) {
    errors.phone = 'Please enter a 10-digit phone number.';
  }

  if (!values.service) {
    errors.service = 'Please choose a service.';
  }

  if (values.message.length > 600) {
    errors.message = 'Please keep the message under 600 characters.';
  }

  return errors;
}

const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-[0.9375rem] text-ink-900 placeholder:text-ink-400 transition focus:outline-none focus-visible:border-brass-600 focus-visible:ring-2 focus-visible:ring-brass-500/35';

export function EnquiryForm({ defaultService = '' }: { defaultService?: string }) {
  const [values, setValues] = useState<EnquiryPayload>({
    name: '',
    phone: '',
    service: defaultService,
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const update = (key: keyof EnquiryPayload, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    // Clear the error as soon as the visitor starts fixing the field.
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }

    setStatus('sending');

    const payload: EnquiryPayload = { ...values, name: values.name.trim() };
    const { delivered } = await sendEnquiry(payload);

    if (delivered) {
      trackEvent('contact_form_submit', { method: 'backend', service: payload.service });
      setStatus('sent');
      setValues({ name: '', phone: '', service: '', message: '' });
      return;
    }

    /* No backend: hand the enquiry to WhatsApp so nothing is lost. */
    const text = [
      `Hello ${site.name}, I would like to enquire about a service.`,
      '',
      `Name: ${payload.name}`,
      `Phone: +91 ${payload.phone.replace(/\D/g, '').slice(-10)}`,
      `Service required: ${payload.service}`,
      payload.message.trim() ? `Details: ${payload.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    trackEvent('contact_form_submit', { method: 'whatsapp', service: payload.service });

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div
        className="rounded-2xl border border-sand-200 bg-white p-7 text-center"
        role="status"
        aria-live="polite"
      >
        <span
          aria-hidden="true"
          className="mx-auto grid size-12 place-items-center rounded-full bg-brass-100 text-brass-700"
        >
          <ShieldCheck className="size-6" />
        </span>
        <h3 className="mt-4 font-display text-xl text-ink-900">Thanks â€” we have your enquiry</h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">
          WhatsApp should have opened in a new tab with your details filled in. Press send there
          and we will reply shortly. If it did not open, please call us on{' '}
          <a
            href={site.phone.href}
            data-event="phone_click"
            data-event-label="contact_form_phone_fallback"
            aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
            className="font-semibold text-brass-700 underline underline-offset-4"
          >
            {site.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-ink-700 underline underline-offset-4 transition-colors hover:text-brass-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8"
    >
      <h2 className="font-display text-2xl text-ink-900">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        Fill this in and it will open WhatsApp with your details ready to send. For a quicker
        conversation, call us directly.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="block text-sm font-semibold text-ink-800">
            Your Name <span className="text-brass-600">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
            placeholder="Full name"
            className={cx(
              fieldBase,
              'mt-2',
              errors.name ? 'border-red-500' : 'border-sand-200',
            )}
          />
          {errors.name && (
            <p id="enquiry-name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="block text-sm font-semibold text-ink-800">
            Phone Number <span className="text-brass-600">*</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
            placeholder="10-digit mobile number"
            className={cx(
              fieldBase,
              'mt-2',
              errors.phone ? 'border-red-500' : 'border-sand-200',
            )}
          />
          {errors.phone && (
            <p id="enquiry-phone-error" className="mt-1.5 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-service" className="block text-sm font-semibold text-ink-800">
            Service Required <span className="text-brass-600">*</span>
          </label>
          <select
            id="enquiry-service"
            name="service"
            required
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'enquiry-service-error' : undefined}
            className={cx(
              fieldBase,
              'mt-2 appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10',
              errors.service ? 'border-red-500' : 'border-sand-200',
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235a5145'%3E%3Cpath d='M5.5 7.5 10 12l4.5-4.5'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select a serviceâ€¦</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="enquiry-service-error" className="mt-1.5 text-sm text-red-700">
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-message" className="block text-sm font-semibold text-ink-800">
            Message <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
            placeholder="e.g. Three-seater fabric sofa, the seat is sagging and the fabric is torn on one arm. Sector 29."
            className={cx(
              fieldBase,
              'mt-2 resize-y',
              errors.message ? 'border-red-500' : 'border-sand-200',
            )}
          />
          {errors.message && (
            <p id="enquiry-message-error" className="mt-1.5 text-sm text-red-700">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-base font-semibold text-sand-50 transition hover:bg-ink-800 disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? (
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {status === 'sending' ? 'Opening WhatsAppâ€¦' : 'Send via WhatsApp'}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-500">
        This form does not send email. Submitting opens WhatsApp with your details, which you
        review and send yourself.
      </p>
    </form>
  );
}
