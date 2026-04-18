import { useState } from 'react'

const inputStyle = {
  border: '1px solid #d1d5db',
  borderRadius: 6,
  padding: '8px 12px',
  fontSize: 14,
  color: '#1f2937',
  outline: 'none',
  width: '100%',
  background: '#fff',
}

const labelStyle = {
  fontSize: 13,
  color: '#374151',
  fontWeight: 500,
  marginBottom: 6,
  display: 'block',
}

export default function RateCalculator() {
  const [boxes, setBoxes] = useState([{ id: 1, count: 100, l: 10, w: 10, h: 10, unit: 'Cm' }])
  const [editingId, setEditingId] = useState(null)
  const [totalWeight, setTotalWeight] = useState(100)
  const [shipmentAmount, setShipmentAmount] = useState(1000)
  const [paymentMode, setPaymentMode] = useState('prepaid')
  const [freight, setFreight] = useState('fod')
  const [dropOff, setDropOff] = useState('pickup')
  const [showBreakdown, setShowBreakdown] = useState(true)

  const activeBox = boxes[0]

  return (
    <div>
      {/* Page title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: 0 }}>
          Serviceability &amp; Rate Calculator
        </h1>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px',
          border: '1px solid #d1d5db', borderRadius: 6, background: '#fff',
          fontSize: 13, color: '#374151', cursor: 'pointer', fontWeight: 500,
        }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: '#6b7280' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Learn More
        </button>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        {/* Left panel */}
        <div style={{
          flex: 1, background: '#fff', border: '1px solid #e5e7eb',
          borderRadius: 10, padding: 24, minWidth: 0,
        }}>
          {/* Section: Pickup & Delivery */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 16 }}>
              Pickup &amp; Delivery Pincode
            </div>

            {/* Route */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 6 }}>
              {/* Origin */}
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 8,
                border: '1px solid #e5e7eb', borderRadius: '6px 0 0 6px',
                padding: '8px 12px', background: '#fff',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 600, color: '#1f2937' }}>641009</span>
                <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#3b82f6', background: '#dbeafe', padding: '2px 6px', borderRadius: 4 }}>TN</span>
              </div>

              {/* Arrow */}
              <div style={{
                width: 48, height: 38, background: '#f9fafb', border: '1px solid #e5e7eb',
                borderLeft: 'none', borderRight: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <line x1="0" y1="8" x2="16" y2="8" stroke="#9ca3af" strokeWidth="1.5" />
                  <path d="M12 3 L18 8 L12 13" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Destination */}
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 8,
                border: '1px solid #e5e7eb', borderRadius: '0 6px 6px 0',
                padding: '8px 12px', background: '#fff',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 600, color: '#1f2937' }}>560025</span>
                <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 600, color: '#3b82f6', background: '#dbeafe', padding: '2px 6px', borderRadius: 4 }}>KA</span>
              </div>
            </div>

            {/* Location labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b7280', marginBottom: 16 }}>
              <span>Coimbatore, Tamil Nadu</span>
              <span>Bangalore, Karnataka</span>
            </div>
          </div>

          {/* Box card */}
          {boxes.map(box => (
            editingId === box.id ? null : (
              <div key={box.id} style={{
                background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8,
                padding: '14px 16px', marginBottom: 16, display: 'flex', alignItems: 'center',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#1f2937', marginBottom: 2 }}>
                    {box.count} Boxes
                  </div>
                  <div style={{ fontSize: 13, color: '#6b7280' }}>
                    {box.l} x {box.w} x {box.h} cms
                  </div>
                </div>
                <button
                  onClick={() => setEditingId(box.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#6b7280' }}
                  title="Edit"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => setBoxes(b => b.filter(x => x.id !== box.id))}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#6b7280' }}
                  title="Delete"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            )
          ))}

          {/* Box form */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Number of boxes</label>
                <input
                  type="number"
                  value={activeBox?.count}
                  onChange={e => setBoxes(b => b.map(x => x.id === 1 ? { ...x, count: e.target.value } : x))}
                  style={inputStyle}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Box Size</label>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {['l', 'w', 'h'].map(dim => (
                    <input
                      key={dim}
                      type="number"
                      value={activeBox?.[dim]}
                      onChange={e => setBoxes(b => b.map(x => x.id === 1 ? { ...x, [dim]: e.target.value } : x))}
                      style={{ ...inputStyle, width: 76, padding: '8px 8px', textAlign: 'center' }}
                    />
                  ))}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    border: '1px solid #d1d5db', borderRadius: 6, padding: '7px 10px',
                    fontSize: 13, color: '#374151', background: '#fff', cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}>
                    Cm
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Add another */}
            <button
              onClick={() => setBoxes(b => [...b, { id: Date.now(), count: 1, l: 10, w: 10, h: 10, unit: 'Cm' }])}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, background: 'none',
                border: 'none', cursor: 'pointer', fontSize: 14, color: '#374151',
                fontWeight: 500, padding: 0, marginBottom: 4,
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #374151',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              Add Another Box Size
            </button>
          </div>

          {/* Weight & Amount */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Total shipment weight</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  value={totalWeight}
                  onChange={e => setTotalWeight(e.target.value)}
                  style={{ ...inputStyle, paddingRight: 40 }}
                />
                <span style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  fontSize: 13, color: '#9ca3af', fontWeight: 500,
                }}>Kg</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Shipment Amount</label>
              <div style={{ display: 'flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}>
                <span style={{
                  display: 'flex', alignItems: 'center', padding: '0 10px',
                  background: '#f9fafb', borderRight: '1px solid #d1d5db',
                  fontSize: 14, color: '#374151', fontWeight: 500,
                }}>₹</span>
                <input
                  type="number"
                  value={shipmentAmount}
                  onChange={e => setShipmentAmount(e.target.value)}
                  style={{ ...inputStyle, border: 'none', borderRadius: 0, flex: 1 }}
                />
              </div>
            </div>
          </div>

          {/* Payment Mode */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Payment Mode</label>
            <div style={{ display: 'flex', gap: 20 }}>
              <RadioOption
                name="payment"
                value="prepaid"
                checked={paymentMode === 'prepaid'}
                onChange={() => setPaymentMode('prepaid')}
                label="Prepaid"
              />
              <RadioOption
                name="payment"
                value="cod"
                checked={paymentMode === 'cod'}
                onChange={() => setPaymentMode('cod')}
                label="Collect on Delivery (COD)"
              />
            </div>
          </div>

          {/* Freight & Drop-off */}
          <div style={{
            display: 'flex', gap: 0, border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden',
          }}>
            <div style={{ flex: 1, padding: '14px 16px', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>Freight</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <RadioOption name="freight" value="fod" checked={freight === 'fod'} onChange={() => setFreight('fod')} label="Freight on Delivery" />
                <RadioOption name="freight" value="btc" checked={freight === 'btc'} onChange={() => setFreight('btc')} label="Bill to Client" />
              </div>
            </div>
            <div style={{ flex: 1, padding: '14px 16px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>
                Will you drop off your packages at our facility?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <RadioOption name="dropoff" value="pickup" checked={dropOff === 'pickup'} onChange={() => setDropOff('pickup')} label="No, Pickup from me" />
                <RadioOption name="dropoff" value="self" checked={dropOff === 'self'} onChange={() => setDropOff('self')} label="Yes, I'll self-drop" />
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <button style={{
            marginTop: 20, width: '100%', padding: '11px 0',
            background: '#1e1b4b', color: '#fff', border: 'none',
            borderRadius: 7, fontSize: 15, fontWeight: 600, cursor: 'pointer',
          }}>
            Calculate
          </button>
        </div>

        {/* Right panel - Rate card */}
        <div style={{
          width: 340, background: '#fff', border: '1px solid #e5e7eb',
          borderRadius: 10, padding: 24, flexShrink: 0,
        }}>
          {/* Service header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 15, color: '#374151', fontWeight: 500, marginBottom: 4 }}>Surface</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#111827', lineHeight: 1 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>₹</span>1,404.2
              </div>
              <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>Delivery in 2 days</div>
            </div>
            {/* Truck icon */}
            <div style={{
              width: 56, height: 56, border: '1.5px solid #e5e7eb', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="32" height="26" fill="none" viewBox="0 0 36 28" stroke="#9ca3af" strokeWidth="1.8">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <path d="M23 10h6l4 5v5h-10V10z" />
                <circle cx="8" cy="23" r="3" />
                <circle cx="28" cy="23" r="3" />
              </svg>
            </div>
          </div>

          {/* Weight info */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, fontSize: 13,
            color: '#6b7280', paddingBottom: 14, borderBottom: '1px solid #e5e7eb', marginBottom: 14,
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Total Weight: 100 kg
            <span style={{ color: '#d1d5db' }}>•</span>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M12 7h.01M15 7h.01" />
            </svg>
            Charged Weight: 100 kg
          </div>

          {/* Breakdown toggle */}
          <button
            onClick={() => setShowBreakdown(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: '#374151', fontWeight: 500, padding: 0, marginBottom: 14,
            }}
          >
            <span>{showBreakdown ? 'Hide' : 'Show'} Freight Breakdown</span>
            <svg
              width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              style={{ transform: showBreakdown ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.2s' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {showBreakdown && (
            <>
              {/* Freight charges row */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: '#1f2937' }}>
                  Freight Charges
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: '#9ca3af' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1f2937' }}>₹1,190.00</span>
              </div>

              {/* Line items */}
              {[
                { label: 'Base freight charges', amount: '₹850.00' },
                { label: 'Fuel surcharges', amount: '₹90.00' },
                { label: 'Insurance ROV', amount: '₹150.00' },
                { label: 'Handling charges', amount: '₹100.00' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: 13, color: '#6b7280', marginBottom: 10, paddingLeft: 8,
                }}>
                  <span>{item.label}</span>
                  <span style={{ color: '#374151' }}>{item.amount}</span>
                </div>
              ))}

              {/* GST */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: 14, fontWeight: 600, color: '#1f2937',
                paddingTop: 10, borderTop: '1px solid #e5e7eb', marginTop: 4, marginBottom: 20,
              }}>
                <span>GST at 18%</span>
                <span>₹214.20</span>
              </div>
            </>
          )}

          {/* Create Order */}
          <button style={{
            width: '100%', padding: '10px 0',
            background: '#fff', color: '#1f2937',
            border: '1.5px solid #d1d5db', borderRadius: 7,
            fontSize: 14, fontWeight: 600, cursor: 'pointer', marginBottom: 14,
          }}>
            Create Order
          </button>

          {/* Disclaimer */}
          <div style={{ display: 'flex', gap: 8, fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              This freight charge is subject to a change based on revisions, if any, in weight &amp; dimension measurements, delivery pin code and pricing file.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RadioOption({ name, value, checked, onChange, label }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#374151' }}>
      <div
        onClick={onChange}
        style={{
          width: 16, height: 16, borderRadius: '50%',
          border: `2px solid ${checked ? '#4338ca' : '#d1d5db'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, cursor: 'pointer', background: '#fff',
        }}
      >
        {checked && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4338ca' }} />}
      </div>
      {label}
    </label>
  )
}
