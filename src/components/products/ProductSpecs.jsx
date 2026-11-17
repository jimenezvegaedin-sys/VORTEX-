export default function ProductSpecs({ specs = {} }) {
  const labels = {
    power:'Potencia nominal', phases:'Número de fases', primary:'Tensión primaria', secondary:'Tensión secundaria',
    frequency:'Frecuencia', insulation:'Aislamiento', cooling:'Sistema de enfriamiento', dimensions:'Dimensiones estimadas', weight:'Peso ilustrativo'
  };
  const entries = Object.entries(specs).filter(([,v]) => v && v !== 'N/A');
  if (!entries.length) return <p className="muted">No hay especificaciones registradas.</p>;
  return (
    <div className="table-wrap"><table><tbody>
      {entries.map(([k,v]) => (
        <tr key={k}><th style={{width:240}}>{labels[k] || k}</th><td>{String(v)}</td></tr>
      ))}
    </tbody></table></div>
  );
}
