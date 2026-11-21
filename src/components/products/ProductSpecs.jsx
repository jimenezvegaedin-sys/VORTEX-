export default function ProductSpecs({ specs = {} }) {
  const labels = {
    power: 'Potencia nominal',
    phases: 'Número de fases',
    primary: 'Tensión primaria',
    secondary: 'Tensión secundaria',
    frequency: 'Frecuencia',
    vectorGroup: 'Conexión / grupo vectorial',
    temperature: 'Clase térmica',
    insulation: 'Aislamiento',
    cooling: 'Sistema de enfriamiento',
    standard: 'Norma de referencia',
    impedance: 'Impedancia',
    losses: 'Pérdidas (vacío / carga)',
    protection: 'Protección / grado IP',
    mounting: 'Montaje',
    range: 'Rango de regulación',
    ratedCurrent: 'Corriente nominal',
    packaging: 'Presentación',
    dimensions: 'Dimensiones estimadas',
    weight: 'Peso estimado'
  };
  const units = {
    power: 'kVA',
    frequency: 'Hz',
    primary: 'kV',
    secondary: 'kV',
    impedance: '%',
    losses: 'W',
    ratedCurrent: 'A',
    range: '± %',
    dimensions: 'mm',
    weight: 'kg'
  };
  const entries = Object.entries(specs).filter(([, v]) => v && v !== 'N/A' && v !== 'No aplica');
  if (!entries.length) return <p className="muted">No hay especificaciones registradas.</p>;
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>Parámetro técnico</th><th>Valor</th><th>Unidad / tipo</th></tr>
        </thead>
        <tbody>
          {entries.map(([k, v]) => {
            const isEst = String(v).includes('(est.)') || String(v).includes('(ilustrativa)') || String(v).includes('(ilustrativo)') || String(v).includes('(conceptual)') || String(v).includes('(típ.)');
            return (
              <tr key={k}>
                <th style={{ width: 220, textAlign: 'left' }}>{labels[k] || k}</th>
                <td style={{ fontWeight: 600, color: isEst ? '#8a6d1d' : '#141212' }}>{String(v)}</td>
                <td style={{ fontSize: '.85rem', color: '#666' }}>{units[k] || (isEst ? 'dato ilustrativo' : '—')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="muted" style={{ marginTop: 10, fontSize: '.85rem' }}>
        Valores ilustrativos y normas citadas como referencia para el prototipo académico. No son datos certificados por fabricante.
      </p>
    </div>
  );
}
