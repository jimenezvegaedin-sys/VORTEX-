import { useState } from "react";

export default function Tabs({ tabs=[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  return (
    <div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16}}>
        {tabs.map((t,i)=>(
          <button key={i} className={`btn ${active===i?'btn-secondary':'btn-outline'}`} onClick={()=>setActive(i)}>{t.label}</button>
        ))}
      </div>
      <div className="card"><div className="card-body">{current?.content}</div></div>
    </div>
  );
}
