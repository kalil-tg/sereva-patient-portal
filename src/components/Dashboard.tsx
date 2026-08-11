import { Icon } from '../icons'

export function Dashboard({ onResults, onRefill }: { onResults: () => void; onRefill: () => void }) {
  return <main id="main-content" tabIndex={-1} className="dashboard-grid">
    <section className="care-column" aria-labelledby="home-title">
      <h1 id="home-title">Good morning, Kalil.</h1><p className="lead">Here is what needs your attention.</p>
      <section className="care-tasks" aria-labelledby="care-title"><h2 id="care-title">Care tasks</h2>
        <article className="task featured"><Icon name="file"/><div><h3>Review complete blood count</h3><p className="attention">New result</p></div><button className="button primary" type="button" onClick={onResults}>Review result <Icon name="arrow"/></button></article>
        <article className="task"><Icon name="medicine"/><div><h3>Refill Metformin</h3><p className="due">Due in 6 days</p></div><button className="button secondary" type="button" onClick={onRefill}>Request refill <Icon name="arrow"/></button></article>
      </section>
      <section className="recent-message" aria-labelledby="message-title"><h2 id="message-title">Recent message</h2><div><Icon name="message"/><div><strong><i aria-hidden="true"/>Dr Romano</strong><p>Your follow-up plan</p></div><time>Yesterday</time><button className="button secondary" type="button">Read message <Icon name="arrow"/></button></div><a href="#messages">View all messages <Icon name="arrow"/></a></section>
    </section>
    <aside className="care-rail" aria-label="Upcoming care">
      <section className="appointment"><h2>Upcoming appointment</h2><div><span className="round-icon"><Icon name="calendar"/></span><h3>Dr Sofia Romano</h3><p>General medicine</p><hr/><p className="appointment-date"><Icon name="calendar"/>Tuesday, 11 August · 10:30</p><button className="button primary" type="button">View appointment <Icon name="arrow"/></button></div></section>
      <section className="medications"><h2>Medications</h2><button type="button" onClick={onRefill}><span><Icon name="medicine"/></span><span><strong>Metformin 500 mg</strong><small>Take 1 tablet twice daily</small></span><Icon name="arrow"/></button><button type="button"><span><Icon name="sun"/></span><span><strong>Vitamin D3 1000 IU</strong><small>Take 1 tablet daily</small></span><Icon name="arrow"/></button><a href="#medications">View all medications <Icon name="arrow"/></a></section>
    </aside>
  </main>
}
