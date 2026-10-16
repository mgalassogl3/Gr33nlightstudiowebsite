'use client';

import { useState } from 'react';
import Icon from './Icon';
import MessageForm from './MessageForm';

const money = (n) => `$${n.toFixed(2).replace(/\.00$/, '')}`;

function rentalDays(pickup, ret) {
  if (!pickup || !ret) return 1;
  const diff = Math.round((new Date(ret) - new Date(pickup)) / 86400000);
  return Math.max(1, diff);
}

// Discounts apply one after the other, so they stack multiplicatively.
export function estimate(items, qty, days, discounts, flags) {
  const perDay = items.reduce((sum, g) => sum + (g.rate || 0) * (qty[g.id] || 0), 0);
  const subtotal = perDay * days;
  const lines = [];
  let total = subtotal;
  for (const key of ['student', 'firstTime']) {
    if (!flags[key]) continue;
    const off = total * (discounts[key].percent / 100);
    lines.push({ label: `${discounts[key].label} ${discounts[key].percent}% off`, amount: -off });
    total -= off;
  }
  return { perDay, subtotal, lines, total, unpriced: items.some((g) => qty[g.id] && !g.rate) };
}

export default function RentalRequest({ gear, discounts }) {
  const [qty, setQty] = useState({});
  const [form, setForm] = useState({});
  const today = new Date().toISOString().slice(0, 10);

  const maxOf = (item) => item.available ?? 20;
  const change = (item, delta) =>
    setQty((q) => ({ ...q, [item.id]: Math.max(0, Math.min(maxOf(item), (q[item.id] || 0) + delta)) }));

  const selected = gear.filter((g) => qty[g.id]);
  const itemCount = selected.reduce((n, g) => n + qty[g.id], 0);
  const days = rentalDays(form.pickup, form.return);
  const flags = { student: !!form.student, firstTime: !!form.firstTime };
  const est = estimate(selected, qty, days, discounts, flags);

  return (
    <>
      <ul className="gearList">
        {gear.map((item) => (
          <li key={item.id} className={`gearRow ${qty[item.id] ? 'gearRowOn' : ''}`}>
            {item.image ? (
              <img src={item.image} alt={item.name} className="gearThumb" loading="lazy" />
            ) : (
              <span className="gearThumb gearThumbEmpty" aria-hidden="true" />
            )}
            <div>
              <h3 className="gearName">{item.name}</h3>
              <span className="gearCat">
                {item.category}
                {item.available ? ` · ${item.available} available` : ''}
              </span>
            </div>
            <p className="gearSpecs">{item.specs.join(' · ')}</p>
            <span className="rate">
              {item.rate ? (
                <>
                  <strong>${item.rate}</strong> / day{item.unit && item.unit !== 'kit' ? `, ${item.unit}` : ''}
                </>
              ) : (
                'Rate on request'
              )}
            </span>
            <div className="stepper" role="group" aria-label={`Quantity of ${item.name}`}>
              <button type="button" onClick={() => change(item, -1)} aria-label={`Remove one ${item.name}`} disabled={!qty[item.id]}>
                <Icon name="minus" size={16} />
              </button>
              <output aria-live="polite">{qty[item.id] || 0}</output>
              <button
                type="button"
                onClick={() => change(item, 1)}
                aria-label={`Add one ${item.name}`}
                disabled={(qty[item.id] || 0) >= maxOf(item)}
              >
                <Icon name="plus" size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="split" id="request" style={{ marginTop: 120 }}>
        <div>
          <h2 className="h2">Request</h2>
          {selected.length ? (
            <div className="estimate" aria-live="polite">
              <ul className="requestList">
                {selected.map((g) => (
                  <li key={g.id}>
                    <span>
                      {g.name} <span className="muted">× {qty[g.id]}</span>
                    </span>
                    <span className="muted">{g.rate ? `${money(g.rate * qty[g.id])} / day` : 'On request'}</span>
                  </li>
                ))}
                <li>
                  <span className="muted">
                    {days} day{days > 1 ? 's' : ''}
                  </span>
                  <span>{money(est.subtotal)}</span>
                </li>
                {est.lines.map((l) => (
                  <li key={l.label} className="discountLine">
                    <span>{l.label}</span>
                    <span>−{money(-l.amount)}</span>
                  </li>
                ))}
              </ul>
              <p className="estimateTotal">
                <span>Estimated total</span>
                <strong>{money(est.total)}</strong>
              </p>
              <p className="muted formHint">
                Estimate before deposit{est.unpriced ? ', plus items priced on request' : ''}. We’ll confirm the final price.
              </p>
            </div>
          ) : (
            <p className="muted">Use + above to add gear to your request.</p>
          )}
        </div>
        <div className="formWrap">
          <MessageForm
            submitLabel="Request"
            disabled={!itemCount}
            onChange={setForm}
            fields={[
              { name: 'name', label: 'Name', required: true },
              { name: 'phone', label: 'Phone', type: 'tel', required: true },
              { name: 'pickup', label: 'Pickup date', type: 'date', required: true, min: today },
              { name: 'return', label: 'Return date', type: 'date', required: true, min: form.pickup || today },
              { name: 'student', label: `I’m a student (${discounts.student.percent}% off)`, type: 'checkbox', full: true },
              { name: 'firstTime', label: `This is my first rental with GL3 (${discounts.firstTime.percent}% off)`, type: 'checkbox', full: true },
              { name: 'notes', label: 'Project / notes', type: 'textarea', full: true },
            ]}
            compose={(v) => {
              const f = { student: !!v.student, firstTime: !!v.firstTime };
              const d = rentalDays(v.pickup, v.return);
              const e = estimate(selected, qty, d, discounts, f);
              const lines = selected.map((g) => `- ${g.name} x${qty[g.id]}`).join('\n');
              const claims = [f.student && 'Student', f.firstTime && 'First rental'].filter(Boolean).join(' + ');
              const body = [
                `Hi Gr33nlight! Gear rental request from ${v.name} (${v.phone}).`,
                `Dates: ${v.pickup} to ${v.return} (${d} day${d > 1 ? 's' : ''})`,
                lines,
                claims && `Discounts: ${claims}`,
                `Website estimate: ${money(e.total)}`,
                v.notes && `Notes: ${v.notes}`,
              ]
                .filter(Boolean)
                .join('\n');
              return { subject: `Rental request: ${v.pickup} to ${v.return}`, body };
            }}
          />
        </div>
      </div>
    </>
  );
}
