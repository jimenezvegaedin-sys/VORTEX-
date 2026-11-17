export default function Badge({ children, tone='demo', className='' }) {
  const cls = tone==='demo' ? 'badge-demo' : 'chip';
  return <span className={`${cls} ${className}`.trim()}>{children}</span>
}
