import { Icon, type IconName } from '../icons'

type Page = 'overview' | 'results'
const items: Array<{ label: string; icon: IconName; page?: Page }> = [
  { label: 'Overview', icon: 'overview', page: 'overview' },
  { label: 'Appointments', icon: 'calendar' },
  { label: 'Results', icon: 'result', page: 'results' },
  { label: 'Messages', icon: 'message' },
]

export function Shell({ page, onNavigate, children }: { page: Page; onNavigate: (page: Page) => void; children: React.ReactNode }) {
  return <div className="app-shell">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <aside className="side-nav">
      <button className="brand" type="button" onClick={() => onNavigate('overview')}><img src="/images/sereva-mark.png" alt=""/>SEREVA</button>
      <nav aria-label="Patient portal navigation">{items.map(item => item.page ? <button key={item.label} type="button" aria-current={item.page === page ? 'page' : undefined} onClick={() => onNavigate(item.page!)}><Icon name={item.icon}/>{item.label}</button> : <button key={item.label} type="button"><Icon name={item.icon}/>{item.label}</button>)}</nav>
      <div className="identity"><span className="date-icon"><Icon name="calendar"/></span><small>Saturday</small><strong>8</strong><span>August 2026</span><hr/><div><span className="avatar">K</span><span><b>Kalil</b><small>Patient</small></span></div></div>
      <button className="logout" type="button"><Icon name="logout"/>Log out</button>
    </aside>
    <header className="mobile-header"><button className="brand" type="button" onClick={() => onNavigate('overview')}><img src="/images/sereva-mark.png" alt=""/>SEREVA</button><details><summary aria-label="Open navigation"><Icon name="menu"/></summary><nav aria-label="Mobile patient portal navigation">{items.map(item => item.page ? <button key={item.label} type="button" aria-current={item.page === page ? 'page' : undefined} onClick={() => onNavigate(item.page!)}>{item.label}</button> : <button key={item.label} type="button">{item.label}</button>)}</nav></details></header>
    <div className="top-user"><span className="avatar">K</span><span>Kalil</span><span aria-hidden="true">⌄</span></div>
    {children}
  </div>
}
