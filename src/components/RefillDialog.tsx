import { useEffect, useRef, useState } from 'react'
import { Icon } from '../icons'

export function RefillDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [sent, setSent] = useState(false)
  useEffect(() => { const dialog = ref.current; if (!dialog) return; if (open && !dialog.open) { setSent(false); dialog.showModal() } else if (!open && dialog.open) dialog.close() }, [open])
  function close() { ref.current?.close(); onClose() }
  return <dialog ref={ref} className="refill-dialog" onCancel={event => { event.preventDefault(); close() }} onClose={onClose} aria-labelledby="refill-title">
    {!sent ? <form method="dialog" onSubmit={event => { event.preventDefault(); setSent(true) }}><header><div><h2 id="refill-title">Request Metformin refill</h2><div className="medication-heading"><span><Icon name="medicine"/></span><p><strong>Metformin 500 mg</strong><small>Take 1 tablet twice daily</small></p></div></div><button className="icon-button" type="button" onClick={close} aria-label="Close refill request"><Icon name="close"/></button></header><label htmlFor="pharmacy">Preferred pharmacy</label><select id="pharmacy" defaultValue="central"><option value="central">Farmacia Centrale, Padua</option><option value="san-marco">Farmacia San Marco, Padua</option></select><label htmlFor="care-message">Message for your care team <span>(optional)</span></label><textarea id="care-message" maxLength={300} placeholder="Add any notes or details for your care team…"/><p className="dialog-note"><Icon name="info"/>Your care team will review this request. This is not an emergency service.</p><div className="dialog-actions"><button className="button secondary" type="button" onClick={close}>Cancel</button><button className="button primary" type="submit">Send request</button></div></form> : <div className="dialog-success" role="status"><span aria-hidden="true">✓</span><h2 id="refill-title">Request sent</h2><p>Your care team will review the Metformin refill request and reply in Messages.</p><button className="button primary" type="button" onClick={close}>Return to overview</button></div>}
  </dialog>
}
