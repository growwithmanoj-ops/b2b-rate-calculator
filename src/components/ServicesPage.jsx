/**
 * CTA state reference:
 *   coming_soon  – feature not yet available
 *   activate     – ready to be activated
 *   active       – live; shows Active + Configure split
 *   in_progress  – activation is processing
 *   incomplete   – activated but setup needs attention
 */

// ─── State tag pill ──────────────────────────────────────────────────────────

const STATE_TAGS = {
  coming_soon: { label: 'Coming Soon', bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' },
  in_progress: { label: 'In Progress', bg: '#fffbeb', color: '#b45309', border: '#fde68a' },
  incomplete:  { label: 'Action Required', bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
}

function StateTag({ state }) {
  const tag = STATE_TAGS[state]
  if (!tag) return null
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
      padding: '3px 8px', borderRadius: 99,
      background: tag.bg, color: tag.color, border: `1px solid ${tag.border}`,
      whiteSpace: 'nowrap',
    }}>
      {tag.label.toUpperCase()}
    </span>
  )
}

// ─── Bottom CTA ──────────────────────────────────────────────────────────────

function CardAction({ state }) {
  // 1. Coming Soon — disabled, no interaction
  if (state === 'coming_soon') {
    return (
      <div style={{
        width: '100%', height: 44, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 8,
        background: '#f9fafb', border: '1px solid #e5e7eb',
        borderRadius: 8, color: '#d1d5db', fontSize: 14, fontWeight: 500,
        cursor: 'not-allowed', userSelect: 'none',
      }}>
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Coming Soon
      </div>
    )
  }

  // 2. Activate Now — primary action
  if (state === 'activate') {
    return (
      <button style={{
        width: '100%', height: 44, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 8,
        background: '#111827', color: '#fff',
        border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600,
        cursor: 'pointer',
      }}>
        <svg width="14" height="14" fill="#fbbf24" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        Activate Now
      </button>
    )
  }

  // 3. Active — split: green Active badge + indigo Configure link
  if (state === 'active') {
    return (
      <div style={{
        display: 'flex', height: 44,
        border: '1px solid #bbf7d0', borderRadius: 8, overflow: 'hidden',
      }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          background: '#f0fdf4', color: '#16a34a', fontSize: 13, fontWeight: 600,
        }}>
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Active
        </div>
        <div style={{ width: 1, background: '#bbf7d0', flexShrink: 0 }} />
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          background: '#fff', color: '#4338ca', fontSize: 13, fontWeight: 500, cursor: 'pointer',
        }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Configure
        </div>
      </div>
    )
  }

  // 4. Activation In Progress — amber, non-interactive
  if (state === 'in_progress') {
    return (
      <div style={{
        width: '100%', height: 44, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 8,
        background: '#fffbeb', border: '1px solid #fde68a',
        borderRadius: 8, color: '#92400e', fontSize: 14, fontWeight: 500,
        cursor: 'default',
      }}>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#d97706" strokeWidth="2.5" strokeLinecap="round"
          style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }}
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        Activation In Progress
      </div>
    )
  }

  // 5. Incomplete — orange, actionable
  if (state === 'incomplete') {
    return (
      <button style={{
        width: '100%', height: 44, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 8,
        background: '#fff7ed', border: '1px solid #fed7aa',
        borderRadius: 8, color: '#c2410c', fontSize: 14, fontWeight: 600,
        cursor: 'pointer',
      }}>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        Complete Setup
      </button>
    )
  }

  return null
}

// ─── Icon box ────────────────────────────────────────────────────────────────

function ServiceIcon({ type, color, bg }) {
  const map = {
    shield: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    rto: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    whatsapp: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    network: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path strokeLinecap="round" d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" />
      </svg>
    ),
    search: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    diamond: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.5 6H20l-4 5 1.5 7L12 17l-5.5 3L8 13 4 8h4.5L12 2z" />
      </svg>
    ),
    bike: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <circle cx="5.5" cy="17" r="2.5" />
        <circle cx="18.5" cy="17" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 17l5-8h3l2.5 4.5H18.5M10.5 9l3.5 5.5M13.5 9h2.5l2 3" />
      </svg>
    ),
    cart: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    truck: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5.5M13 16l1.5.5M13 16H9m4 0h1m-1-10h2.5a1 1 0 01.8.4l2.5 3.3a1 1 0 01.2.6V16h-2" />
      </svg>
    ),
    globe: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
  return (
    <div style={{
      width: 46, height: 46, borderRadius: 10, background: bg, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {map[type]}
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

function ServiceCard({ title, description, iconType, iconColor, iconBg, state }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12,
      padding: '20px 20px 16px', display: 'flex', flexDirection: 'column',
    }}>
      {/* Header row: title + state tag + icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ flex: 1, paddingRight: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 6 }}>{title}</div>
          <StateTag state={state} />
        </div>
        <ServiceIcon type={iconType} color={iconColor} bg={iconBg} />
      </div>

      {/* Description */}
      <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55, flex: 1, marginBottom: 20 }}>
        {description}
      </div>

      {/* CTA */}
      <CardAction state={state} />
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const valueAdded = [
  { title: 'Delhivery Protect',   description: 'Secure your shipments against loss and damages.',                                                          iconType: 'shield',   iconColor: '#7c3aed', iconBg: '#ede9fe', state: 'activate'    },
  { title: 'RTO Predictor',       description: 'Save on potential losses by identifying high return risk orders before shipping.',                          iconType: 'rto',      iconColor: '#ea580c', iconBg: '#fff7ed', state: 'active'      },
  { title: 'Communications',      description: 'Improve deliverability by informing your customers about real time shipment updates.',                      iconType: 'whatsapp', iconColor: '#25D366', iconBg: '#f0fdf4', state: 'active'      },
  { title: 'Channel Integration', description: 'Pre-Integrated with Shopify and Woocommerce - your orders get auto-fetched by Delhivery',                  iconType: 'network',  iconColor: '#7c3aed', iconBg: '#f5f3ff', state: 'in_progress' },
  { title: 'Universal Search',    description: 'Access everything you need from one search bar.',                                                          iconType: 'search',   iconColor: '#9ca3af', iconBg: '#f3f4f6', state: 'coming_soon' },
  { title: 'Delhivery AI Support',description: 'Get instant answers and resolve issues in real time.',                                                     iconType: 'diamond',  iconColor: '#6b7280', iconBg: '#f9fafb', state: 'active'      },
]

const logistics = [
  { title: 'Direct Intracity',    description: 'Hire bikes or trucks to deliver goods',                                                                    iconType: 'bike',     iconColor: '#e11d48', iconBg: '#fff1f2', state: 'activate'    },
  { title: 'Domestic Parcel',     description: 'Deliver faster to the remotest corners of India and get assured 2 day COD remittances.',                   iconType: 'cart',     iconColor: '#2563eb', iconBg: '#eff6ff', state: 'active'      },
  { title: 'Domestic B2B Cargo',  description: "Join India's fastest, most reliable Part Truck Load cargo service",                                        iconType: 'truck',    iconColor: '#e11d48', iconBg: '#fff1f2', state: 'active'      },
  { title: 'Cross Border Express',description: 'Take your business global. Ship your products to across 220+ countries.',                                  iconType: 'globe',    iconColor: '#7c3aed', iconBg: '#f5f3ff', state: 'incomplete'  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

const grid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }

export default function ServicesPage() {
  return (
    <div>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 20 }}>
        Value Added Services
      </div>
      <div style={grid}>
        {valueAdded.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: '40px 0 20px' }}>
        Logistics Services
      </div>
      <div style={grid}>
        {logistics.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </div>
  )
}
