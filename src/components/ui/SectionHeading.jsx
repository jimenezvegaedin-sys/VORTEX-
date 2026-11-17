export default function SectionHeading({ eyebrow, title, accent, text, center=false, light=false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && <div className="eyebrow" style={light ? {background:'var(--oc-red)',color:'#fff'} : undefined}>{eyebrow}</div>}
      {title && <h2 style={light ? {color:'#fff'} : undefined}>{accent ? <><span className="accent-word">{accent}</span> {title}</> : title}</h2>}
      {text && <p style={light ? {color:'#d6d6d6'} : undefined}>{text}</p>}
    </div>
  )
}
