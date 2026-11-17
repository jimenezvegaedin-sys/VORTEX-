import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import { faqs } from "../data/faqs";

export default function FAQ() {
  return (
    <div className="section">
      <div className="container" style={{maxWidth:900}}>
        <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" text="Respuestas claras sobre el catálogo, servicios y funcionamiento demostrativo del sitio." center />
        <Accordion items={faqs} />
        <div className="notice" style={{marginTop:24}}>Toda la información y las operaciones del sitio son simuladas para fines de demostración académica.</div>
      </div>
    </div>
  );
}
