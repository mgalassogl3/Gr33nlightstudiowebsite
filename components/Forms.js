'use client';

// Server pages can't hand functions to client components, so each
// form's message wording lives here.
import Icon from './Icon';
import MessageForm from './MessageForm';
import { bootcamp } from '@/lib/site';

export function BootcampSignup() {
  return (
    <MessageForm
      submitLabel="Sign up"
      fields={[
        { name: 'name', label: 'Name', required: true },
        { name: 'phone', label: 'Phone', type: 'tel', required: true },
        { name: 'track', label: 'Pick your focus', type: 'select', required: true, options: bootcamp.tracks.map((t) => t.name) },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'goal', label: 'What do you want to get out of it?', type: 'textarea', full: true },
      ]}
      compose={(v) => ({
        subject: `${bootcamp.name} sign-up: ${v.name}`,
        body: [
          `Hi GL3! I want to sign up for the ${bootcamp.name} (starts ${bootcamp.startLabel}).`,
          `Name: ${v.name}`,
          `Phone: ${v.phone}`,
          v.email && `Email: ${v.email}`,
          `Focus: ${v.track}`,
          v.goal && `Goal: ${v.goal}`,
        ]
          .filter(Boolean)
          .join('\n'),
      })}
      after={
        bootcamp.paymentLink && (
          <>
            <a href={bootcamp.paymentLink} target="_blank" rel="noopener noreferrer" className="btn btnPrimary">
              Pay ${bootcamp.price} to lock your spot <Icon name="arrow" size={18} />
            </a>
            <p className="formHint muted">{bootcamp.paymentNote}</p>
          </>
        )
      }
    />
  );
}

const topics = ['Commercial video', 'Gear rental', 'Boot camp', 'Music / GL3 Hub', 'Film (cast, crew, partners)', 'Something else'];

export function ContactForm() {
  return (
    <MessageForm
      fields={[
        { name: 'name', label: 'Name', required: true },
        { name: 'phone', label: 'Phone', type: 'tel', required: true },
        { name: 'topic', label: 'What’s this about?', type: 'select', required: true, options: topics },
        { name: 'company', label: 'Company / brand' },
        { name: 'message', label: 'Tell us about it', type: 'textarea', required: true, full: true },
      ]}
      compose={(v) => ({
        subject: `${v.topic}: ${v.name}`,
        body: [`Hi Gr33nlight! (${v.topic})`, v.message, '', `${v.name}${v.company ? `, ${v.company}` : ''}`, v.phone].join('\n'),
      })}
    />
  );
}

export function ProjectInquiry() {
  return (
    <MessageForm
      submitLabel="Send"
      fields={[
        { name: 'name', label: 'Name', required: true },
        { name: 'phone', label: 'Phone', type: 'tel', required: true },
        { name: 'company', label: 'Company / brand' },
        {
          name: 'type',
          label: 'Type of project',
          type: 'select',
          required: true,
          options: ['Brand / promo video', 'Social content', 'Product video', 'Event coverage', 'Other'],
        },
        { name: 'date', label: 'Shoot date or deadline', type: 'text', placeholder: 'e.g. early December' },
        { name: 'budget', label: 'Budget range', type: 'text' },
        { name: 'message', label: 'Tell us about the project', type: 'textarea', required: true, full: true },
      ]}
      compose={(v) => ({
        subject: `Video project: ${v.type}${v.company ? ` for ${v.company}` : ''}`,
        body: [
          `Hi Gr33nlight! Video project inquiry (${v.type}).`,
          v.message,
          v.date && `Timing: ${v.date}`,
          v.budget && `Budget: ${v.budget}`,
          '',
          `${v.name}${v.company ? `, ${v.company}` : ''}`,
          v.phone,
        ]
          .filter((line) => line !== undefined && line !== '')
          .join('\n'),
      })}
    />
  );
}
