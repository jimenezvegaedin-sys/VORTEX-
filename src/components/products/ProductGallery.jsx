import { useState } from "react";

export default function ProductGallery({ images = [], alt = "Producto" }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const list = images.length ? images : ["/images/products/transformador-trifasico-pad-a.jpg"];
  return (
    <div>
      <div className="card" style={{padding:0,background:"var(--bg-soft)",cursor:"zoom-in",overflow:"hidden"}} onClick={()=>setZoom(true)}>
        <img src={list[active]} alt={alt} style={{width:"100%",aspectRatio:"4/3",objectFit:"cover"}} />
      </div>
      {list.length > 1 && (
        <div style={{display:"flex",gap:10,marginTop:12,flexWrap:"wrap"}}>
          {list.map((img,i)=>(
            <button key={i} onClick={()=>setActive(i)} className="card" style={{padding:0,width:72,height:72,overflow:"hidden",borderColor:active===i?"var(--navy)":"var(--border)"}}>
              <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </button>
          ))}
        </div>
      )}
      {zoom && (
        <div className="mobile-backdrop" style={{display:"flex",alignItems:"center",justifyContent:"center",zIndex:80}} onClick={()=>setZoom(false)}>
          <img src={list[active]} alt={alt} style={{maxWidth:"92vw",maxHeight:"86vh",background:"#fff",borderRadius:12}} />
        </div>
      )}
    </div>
  );
}
