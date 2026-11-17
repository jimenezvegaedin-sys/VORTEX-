import { Link } from "react-router-dom";
export default function EmptyState({ title='Sin resultados', text='No se encontraron elementos.', actionTo='/productos', actionLabel='Ver catálogo' }) {
  return (
    <div className="card" style={{textAlign:'center',padding:32}}>
      <h3>{title}</h3><p>{text}</p>
      {actionTo && <Link to={actionTo} className="btn btn-primary">{actionLabel}</Link>}
    </div>
  );
}
