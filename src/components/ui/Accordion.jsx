import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items=[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid" style={{gap:12}}>
      {items.map((it, i) => (
        <div key={i} className="accordion-item">
          <button className="accordion-trigger" onClick={() => setOpen(open===i ? -1 : i)} aria-expanded={open===i}>
            <span>{it.q || it.title}</span><ChevronDown size={18} style={{transform: open===i?'rotate(180deg)':'none', transition:'transform .2s'}}/>
          </button>
          {open===i && <div className="accordion-panel">{it.a || it.content}</div>}
        </div>
      ))}
    </div>
  );
}
