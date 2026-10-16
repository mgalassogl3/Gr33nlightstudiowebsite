'use client';

import { useState } from 'react';
import Icon from './Icon';
import MessageForm from './MessageForm';

export default function RentalRequest({ gear }) {
  const [qty, setQty] = useState({});
  const today = new Date().toISOString().slice(0, 10);

  const change = (id, delta) =>
    setQty((q) => {
      const next = Math.max(0, Math.min(20, (q[id] || 0) + delta));
      return { ...q, [id]: next };
    });

  const selected = gear.filter((g) => qty[g.id]);
  const itemCount = selected.reduce((n, g) => n + qty[g.id], 0);

  return (
    <>
      <div className="gearGrid">
        {gear.map((item) => (
          <article key={item.id} className={`gearCard ${qty[item.id] ? 'gearCardOn' : ''}`}>
            <div className="gearMedia">
              {item.image ? (
                <img src={item.image} alt={item.name} loading="lazy" />
              ) : (
                <Icon name={item.category === 'Lighting' ? 'light' : item.category === 'Camera movement' ? 'camera' : 'film'} size={44} />
              )}
            </div>
            <div className="gearBody">
              <p className="eyebrow">{item.category}</p>
              <h3 className="cardTitle">{item.name}</h3>
              <ul className="ticks">
                {item.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="gearFoot">
                <span className="rate">{item.rate ? `$${item.rate}/day` : 'Rate on request'}</span>
                <div className="stepper" role="group" aria-label={`Quantity of ${item.name}`}>
                  <button type="button" onClick={() => change(item.id, -1)} aria-label={`Remove one ${item.name}`} disabled={!qty[item.id]}>
                    <Icon name="minus" size={16} />
                  </button>
                  <output aria-live="polite">{qty[item.id] || 0}</output>
                  <button type="button" onClick={() => change(item.id, 1)} aria-label={`Add one ${item.name}`}>
                    <Icon name="plus" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="panel" id="request">
        <h2 className="h2">Request your gear</h2>
        {selected.length ? (
          <ul className="requestList">
            {selected.map((g) => (
              <li key={g.id}>
                <span>{g.name}</span>
                <span className="muted">× {qty[g.id]}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted">Use the + buttons above to add gear to your request.</p>
        )}
        <MessageForm
          submitLabel="Request"
          disabled={!itemCount}
          fields={[
            { name: 'name', label: 'Name', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', required: true },
            { name: 'pickup', label: 'Pickup date', type: 'date', required: true, min: today },
            { name: 'return', label: 'Return date', type: 'date', required: true, min: today },
            { name: 'notes', label: 'Project / notes', type: 'textarea', full: true },
          ]}
          compose={(v) => {
            const lines = selected.map((g) => `- ${g.name} x${qty[g.id]}`).join('\n');
            const body = [
              `Hi Gr33nlight! Gear rental request from ${v.name} (${v.phone}).`,
              `Dates: ${v.pickup} to ${v.return}`,
              lines,
              v.notes && `Notes: ${v.notes}`,
            ]
              .filter(Boolean)
              .join('\n');
            return { subject: `Rental request: ${v.pickup} to ${v.return}`, body };
          }}
        />
      </div>
    </>
  );
}
