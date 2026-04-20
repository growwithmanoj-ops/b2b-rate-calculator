import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ServicesPage from './components/ServicesPage'

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f5f5f5' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
          <ServicesPage />
        </main>
      </div>
    </div>
  )
}
