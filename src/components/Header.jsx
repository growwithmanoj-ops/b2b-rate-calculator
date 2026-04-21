export default function Header() {
  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: 16,
      flexShrink: 0,
    }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#6b7280', flexShrink: 0 }}>
        <span style={{ color: '#9ca3af', cursor: 'pointer' }}>Information Center</span>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: '#d1d5db' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span style={{ color: '#374151', fontWeight: 500 }}>Serviceability &amp; Rate Calculator</span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* LRN Search */}
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden', fontSize: 13 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4, padding: '0 10px', background: '#f9fafb',
          borderRight: '1px solid #d1d5db', height: 34, cursor: 'pointer', color: '#374151', fontWeight: 500,
        }}>
          LRN
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search upto 25 LRNs"
          style={{
            border: 'none', outline: 'none', padding: '0 12px', height: 34,
            width: 180, fontSize: 13, color: '#6b7280', background: '#fff',
          }}
        />
        <button style={{
          height: 34, padding: '0 14px', background: '#312e81', color: '#fff',
          border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 13,
        }}>
          Search
        </button>
      </div>

      {/* Quick Actions */}
      <button style={{
        display: 'flex', alignItems: 'center', gap: 6, height: 36, padding: '0 14px',
        background: '#fff', border: '1px solid #d1d5db', borderRadius: 6,
        cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#374151',
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%', background: '#1e1b4b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" fill="#fbbf24" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        Quick Actions
      </button>

      {/* Tasks */}
      <button style={{
        display: 'flex', alignItems: 'center', gap: 6, height: 36, padding: '0 14px',
        background: '#fff', border: '1px solid #d1d5db', borderRadius: 6,
        cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#374151',
      }}>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: '#6b7280' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Tasks
      </button>

      {/* B2B Surface */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px',
        background: '#fff', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer',
      }}>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#1f2937', lineHeight: 1.2 }}>B2B Surface</div>
          <div style={{ fontSize: 10, color: '#9ca3af', lineHeight: 1.2 }}>MANOJ FASHIONS 7504 B2B</div>
        </div>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Avatar */}
      <div style={{
        width: 36, height: 36, borderRadius: '50%', background: '#1f2937',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', flexShrink: 0,
      }}>
        Ma
      </div>
    </header>
  )
}
