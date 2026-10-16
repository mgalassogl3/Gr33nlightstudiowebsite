'use client';

import { useState } from 'react';
import Icon from './Icon';
import { mailtoHref, smsHref } from '@/lib/links';
import { site } from '@/lib/site';

// A form that doesn't need a server: on submit it opens the visitor's
// Messages or Mail app with everything filled in and addressed to the studio.
//
// fields: [{ name, label, type?, required?, options?, placeholder?, full? }]
// compose(values) → { subject, body }
export default function MessageForm({ fields, compose, submitLabel = 'Send', after, extra, disabled, onChange }) {
  const [sent, setSent] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const channel = event.nativeEvent.submitter?.value || 'sms';
    const { subject, body } = compose(values);
    window.location.href = channel === 'email' ? mailtoHref(subject, body) : smsHref(body);
    setSent(channel);
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      onChange={onChange && ((event) => onChange(Object.fromEntries(new FormData(event.currentTarget).entries())))}
    >
      <div className="formGrid">
        {fields.map((field) => (
          <Field key={field.name} {...field} />
        ))}
      </div>
      {extra}
      <div className="formActions">
        <button type="submit" value="sms" className="btn btnPrimary" disabled={disabled}>
          <Icon name="chat" /> {submitLabel} by text
        </button>
        {site.email && (
          <button type="submit" value="email" className="btn btnGhost" disabled={disabled}>
            <Icon name="mail" /> {submitLabel} by email
          </button>
        )}
      </div>
      <p className="formHint muted">
        This opens your {site.email ? 'Messages or Mail' : 'Messages'} app with your details filled in — just hit send.
      </p>
      {sent && (
        <div className="formSent" role="status">
          <p>
            <Icon name="check" /> Your {sent === 'email' ? 'email' : 'text'} is ready to go. Didn’t open? Text{' '}
            <a href={smsHref()}>{site.phoneDisplay}</a> directly.
          </p>
          {after}
        </div>
      )}
    </form>
  );
}

function Field({ name, label, type = 'text', required, options, placeholder, full, min }) {
  const id = `f-${name}`;
  const common = { id, name, required, placeholder };
  if (type === 'checkbox') {
    return (
      <label className={`check ${full ? 'fieldFull' : ''}`} htmlFor={id}>
        <input id={id} name={name} type="checkbox" />
        <span>{label}</span>
      </label>
    );
  }
  return (
    <label className={`field ${full ? 'fieldFull' : ''}`} htmlFor={id}>
      <span className="fieldLabel">
        {label}
        {!required && <span className="muted"> (optional)</span>}
      </span>
      {type === 'select' ? (
        <select {...common} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...common} rows={4} />
      ) : (
        <input {...common} type={type} min={min} autoComplete={autoCompleteFor(name)} />
      )}
    </label>
  );
}

function autoCompleteFor(name) {
  return { name: 'name', phone: 'tel', email: 'email', company: 'organization' }[name];
}
