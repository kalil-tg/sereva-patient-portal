export type IconName = 'overview' | 'calendar' | 'result' | 'message' | 'logout' | 'file' | 'medicine' | 'sun' | 'download' | 'info' | 'close' | 'menu' | 'arrow'
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { className, viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  const p: Record<IconName, React.ReactNode> = {
    overview: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
    result: <><path d="M8 3v5l-4 9a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-4-9V3"/><path d="M7 3h10M7 15h10"/></>,
    message: <path d="M3 5h18v13H8l-5 3z"/>,
    logout: <><path d="M14 8V4H4v16h10v-4M10 12h11m0 0-3-3m3 3-3 3"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    medicine: <><path d="M9 3h6v3H9zM8 6h8l2 4v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z"/><path d="M6 12h12M12 14v5M9.5 16.5h5"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></>,
    download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    arrow: <path d="m9 6 6 6-6 6"/>,
  }
  return <svg {...common}>{p[name]}</svg>
}
