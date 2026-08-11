import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { RefillDialog } from './components/RefillDialog'
import { Results } from './components/Results'
import { Shell } from './components/Shell'

type Page = 'overview' | 'results'
export default function App() {
  const [page, setPage] = useState<Page>('overview')
  const [refill, setRefill] = useState(false)
  const navigate = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: 'instant' }); window.setTimeout(() => document.getElementById('main-content')?.focus(), 0) }
  return <Shell page={page} onNavigate={navigate}>{page === 'overview' ? <Dashboard onResults={() => navigate('results')} onRefill={() => setRefill(true)}/> : <Results onRefill={() => setRefill(true)}/>}<RefillDialog open={refill} onClose={() => setRefill(false)}/></Shell>
}
