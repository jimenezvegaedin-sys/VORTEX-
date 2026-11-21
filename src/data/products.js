export const products = [
  {
    id: "vtx-001", code: "VTX-001", name: "Transformador monofásico 25 kVA", slug: "transformador-monofasico-25-kva",
    category: "Transformadores monofásicos", type: "Transformador", price: 9800, currency: "PEN", stock: 8, featured: true, demo: true,
    image: "/images/products/transformador-monofasico-aereo.jpg", gallery: ["/images/products/transformador-monofasico-aereo.jpg", "/images/products/transformador-monofasico-red.jpg"], unit: "unidad",
    short: "Equipo demostrativo para distribución monofásica en aplicaciones industriales ligeras.",
    description: "Transformador monofásico de 25 kVA pensado como referencia de catálogo para proyectos de distribución y apoyo eléctrico. Incluye información técnica ilustrativa y precio referencial.",
    specifications: { power: "25 kVA", phases: 1, primary: "10 kV", secondary: "0.23/0.4 kV", frequency: "60 Hz", vectorGroup: "Monofásico", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 90 W / Pk ≈ 600 W (típ.)", protection: "Fusibles limitadores MT y pararrayos", mounting: "Pedestal, intemperie", dimensions: "1100 x 750 x 980 mm (est.)", weight: "280 kg (est.)" },
    applications: ["Distribución local", "Pequeñas instalaciones", "Apoyo en proyectos rurales"], tags: ["monofásico","25 kVA","distribución"]
  },
  {
    id: "vtx-002", code: "VTX-002", name: "Transformador monofásico 37.5 kVA", slug: "transformador-monofasico-37-5-kva",
    category: "Transformadores monofásicos", type: "Transformador", price: 12600, currency: "PEN", stock: 6, featured: false, demo: true,
    image: "/images/products/transformador-monofasico-red.jpg", gallery: ["/images/products/transformador-monofasico-red.jpg", "/images/products/transformador-monofasico-pad.jpg"], unit: "unidad",
    short: "Opción monofásica de mayor capacidad para expansión de carga referencial.",
    description: "Modelo demostrativo de 37.5 kVA orientado a escenarios donde se requiere mayor margen de capacidad en redes monofásicas.",
    specifications: { power: "37.5 kVA", phases: 1, primary: "10 kV", secondary: "0.23/0.4 kV", frequency: "60 Hz", vectorGroup: "Monofásico", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 110 W / Pk ≈ 800 W (típ.)", protection: "Fusibles limitadores MT y pararrayos", mounting: "Pedestal, intemperie", dimensions: "1150 x 780 x 1020 mm (est.)", weight: "340 kg (est.)" },
    applications: ["Redes secundarias", "Comercios e instalaciones", "Proyectos demostrativos"], tags: ["monofásico","37.5 kVA"]
  },
  {
    id: "vtx-003", code: "VTX-003", name: "Transformador monofásico 50 kVA", slug: "transformador-monofasico-50-kva",
    category: "Transformadores monofásicos", type: "Transformador", price: 15900, currency: "PEN", stock: 5, featured: false, demo: true,
    image: "/images/products/transformador-monofasico-pad.jpg", gallery: ["/images/products/transformador-monofasico-pad.jpg", "/images/products/transformador-monofasico-aereo.jpg"], unit: "unidad",
    short: "Capacidad monofásica superior para demanda simulada más exigente.",
    description: "Equipo ficticio de 50 kVA para representar aplicaciones de distribución con requerimientos de potencia mayores.",
    specifications: { power: "50 kVA", phases: 1, primary: "10 kV", secondary: "0.23/0.4 kV", frequency: "60 Hz", vectorGroup: "Monofásico", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 130 W / Pk ≈ 1000 W (típ.)", protection: "Fusibles limitadores MT y pararrayos", mounting: "Pedestal, intemperie", dimensions: "1200 x 820 x 1080 mm (est.)", weight: "410 kg (est.)" },
    applications: ["Distribución monofásica", "Instalaciones ampliadas", "Infraestructura local"], tags: ["monofásico","50 kVA"]
  },
  {
    id: "vtx-004", code: "VTX-004", name: "Transformador trifásico 50 kVA", slug: "transformador-trifasico-50-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 17500, currency: "PEN", stock: 7, featured: true, demo: true,
    image: "/images/products/transformador-trifasico-pad-a.jpg", gallery: ["/images/products/transformador-trifasico-pad-a.jpg", "/images/products/transformador-trifasico-pad-b.jpg"], unit: "unidad",
    short: "Solución trifásica compacta para cargas industriales iniciales.",
    description: "Transformador trifásico de 50 kVA con ficha técnica ilustrativa para proyectos de distribución y uso industrial moderado.",
    specifications: { power: "50 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 190 W / Pk ≈ 1100 W (típ.)", protection: "Fusibles MT y pararrayos en cubierta", mounting: "Pedestal, intemperie", dimensions: "1250 x 850 x 1100 mm (est.)", weight: "520 kg (est.)" },
    applications: ["Talleres", "Plantas pequeñas", "Distribución trifásica"], tags: ["trifásico","50 kVA"]
  },
  {
    id: "vtx-005", code: "VTX-005", name: "Transformador trifásico 75 kVA", slug: "transformador-trifasico-75-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 21800, currency: "PEN", stock: 6, featured: false, demo: true,
    image: "/images/products/transformador-trifasico-pad-b.jpg", gallery: ["/images/products/transformador-trifasico-pad-b.jpg", "/images/products/transformador-trifasico-pad-c.jpg"], unit: "unidad",
    short: "Equipo trifásico de 75 kVA para escenarios de crecimiento operativo.",
    description: "Modelo de catálogo demostrativo con capacidad intermedia para instalaciones industriales y comerciales técnicas.",
    specifications: { power: "75 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 250 W / Pk ≈ 1500 W (típ.)", protection: "Fusibles MT y pararrayos en cubierta", mounting: "Pedestal, intemperie", dimensions: "1300 x 880 x 1150 mm (est.)", weight: "640 kg (est.)" },
    applications: ["Industria ligera", "Edificaciones técnicas", "Distribución secundaria"], tags: ["trifásico","75 kVA"]
  },
  {
    id: "vtx-006", code: "VTX-006", name: "Transformador trifásico 100 kVA", slug: "transformador-trifasico-100-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 26500, currency: "PEN", stock: 4, featured: true, demo: true,
    image: "/images/products/transformador-trifasico-pad-c.jpg", gallery: ["/images/products/transformador-trifasico-pad-c.jpg", "/images/products/transformador-trifasico-pad-d.jpg"], unit: "unidad",
    short: "Referencia trifásica de 100 kVA para operaciones con demanda estable.",
    description: "Transformador trifásico ficticio para representar soluciones de media capacidad en entornos industriales simulados.",
    specifications: { power: "100 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 320 W / Pk ≈ 1900 W (típ.)", protection: "Fusibles MT y pararrayos en cubierta", mounting: "Pedestal, intemperie", dimensions: "1380 x 920 x 1200 mm (est.)", weight: "760 kg (est.)" },
    applications: ["Procesos industriales", "Centros logísticos", "Distribución eléctrica"], tags: ["trifásico","100 kVA"]
  },
  {
    id: "vtx-007", code: "VTX-007", name: "Transformador trifásico 160 kVA", slug: "transformador-trifasico-160-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 38900, currency: "PEN", stock: 3, featured: false, demo: true,
    image: "/images/products/transformador-trifasico-pad-d.jpg", gallery: ["/images/products/transformador-trifasico-pad-d.jpg", "/images/products/transformador-trifasico-pad-e.jpg"], unit: "unidad",
    short: "Capacidad trifásica intermedia-alta para carga demostrativa continua.",
    description: "Equipo de catálogo con potencia de 160 kVA orientado a proyectos que requieren mayor robustez eléctrica simulada.",
    specifications: { power: "160 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "5 % (típ.)", losses: "P0 ≈ 450 W / Pk ≈ 2800 W (típ.)", protection: "Fusibles MT, pararrayos y termómetro", mounting: "Pedestal, intemperie", dimensions: "1450 x 980 x 1280 mm (est.)", weight: "980 kg (est.)" },
    applications: ["Agroindustria", "Plantas productivas", "Infraestructura técnica"], tags: ["trifásico","160 kVA"]
  },
  {
    id: "vtx-008", code: "VTX-008", name: "Transformador trifásico 250 kVA", slug: "transformador-trifasico-250-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 57500, currency: "PEN", stock: 3, featured: true, demo: true,
    image: "/images/products/transformador-trifasico-pad-e.jpg", gallery: ["/images/products/transformador-trifasico-pad-e.jpg", "/images/products/transformador-trifasico-aire-libre.jpg"], unit: "unidad",
    short: "Transformador de 250 kVA para aplicaciones industriales de mayor escala.",
    description: "Modelo demostrativo de alta capacidad en rango trifásico, presentado con especificaciones plausibles e ilustrativas.",
    specifications: { power: "250 kVA", phases: 3, primary: "22.9 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "6 % (típ.)", losses: "P0 ≈ 650 W / Pk ≈ 3900 W (típ.)", protection: "Fusibles MT, pararrayos y termómetro", mounting: "Pedestal, intemperie", dimensions: "1600 x 1050 x 1380 mm (est.)", weight: "1350 kg (est.)" },
    applications: ["Industria", "Infraestructura", "Distribución secundaria"], tags: ["trifásico","250 kVA"]
  },
  {
    id: "vtx-009", code: "VTX-009", name: "Transformador trifásico 400 kVA", slug: "transformador-trifasico-400-kva",
    category: "Transformadores trifásicos", type: "Transformador", price: 87900, currency: "PEN", stock: 2, featured: false, demo: true,
    image: "/images/products/transformador-trifasico-aire-libre.jpg", gallery: ["/images/products/transformador-trifasico-aire-libre.jpg", "/images/products/transformador-distribucion-630.jpg"], unit: "unidad",
    short: "Solución trifásica de 400 kVA para demanda eléctrica simulada elevada.",
    description: "Equipo referencial de gran capacidad dentro del catálogo demostrativo, orientado a sectores con mayor requerimiento energético.",
    specifications: { power: "400 kVA", phases: 3, primary: "22.9 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "6 % (típ.)", losses: "P0 ≈ 950 W / Pk ≈ 5600 W (típ.)", protection: "Fusibles MT, pararrayos, termómetro y válvula de alivio", mounting: "Pedestal, intemperie", dimensions: "1750 x 1150 x 1500 mm (est.)", weight: "1900 kg (est.)" },
    applications: ["Plantas industriales", "Centros de distribución", "Proyectos de infraestructura"], tags: ["trifásico","400 kVA"]
  },
  {
    id: "vtx-010", code: "VTX-010", name: "Transformador de distribución 630 kVA", slug: "transformador-distribucion-630-kva",
    category: "Transformadores de potencia", type: "Transformador de distribución", price: 132000, currency: "PEN", stock: 2, featured: true, demo: true,
    image: "/images/products/transformador-distribucion-630.jpg", gallery: ["/images/products/transformador-distribucion-630.jpg", "/images/products/transformador-potencia-1000.jpg"], unit: "unidad",
    short: "Equipo de distribución de 630 kVA para aplicaciones de mayor envergadura.",
    description: "Transformador demostrativo orientado a esquemas de distribución eléctrica con alta capacidad y robustez ilustrativa.",
    specifications: { power: "630 kVA", phases: 3, primary: "22.9 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "6 % (típ.)", losses: "P0 ≈ 1300 W / Pk ≈ 8000 W (típ.)", protection: "Termómetro, válvula de alivio, relé Buchholz y pararrayos", mounting: "Pedestal, intemperie", dimensions: "1900 x 1250 x 1650 mm (est.)", weight: "2600 kg (est.)" },
    applications: ["Distribución eléctrica", "Parques industriales", "Infraestructura energética"], tags: ["distribución","630 kVA","potencia"]
  },
  {
    id: "vtx-011", code: "VTX-011", name: "Transformador de potencia 1000 kVA", slug: "transformador-potencia-1000-kva",
    category: "Transformadores de potencia", type: "Transformador de potencia", price: 220000, currency: "PEN", stock: 1, featured: true, demo: true,
    image: "/images/products/transformador-potencia-1000.jpg", gallery: ["/images/products/transformador-potencia-1000.jpg", "/images/products/transformador-distribucion-630.jpg"], unit: "unidad",
    short: "Máxima capacidad del catálogo demostrativo para escenarios de potencia.",
    description: "Modelo de 1000 kVA presentado como referencia premium de equipamiento para proyectos industriales simulados de alta demanda.",
    specifications: { power: "1000 kVA", phases: 3, primary: "22.9 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", insulation: "Papel kraft + aceite mineral (ASTM D3487)", cooling: "ONAN/ONAF", standard: "IEC 60076-1 / IEEE C57.12.00", impedance: "6 % (típ.)", losses: "P0 ≈ 1900 W / Pk ≈ 12000 W (típ.)", protection: "Termómetro, relé Buchholz, válvula de alivio y pararrayos", mounting: "Pedestal, intemperie", dimensions: "2200 x 1400 x 1850 mm (est.)", weight: "3600 kg (est.)" },
    applications: ["Subestaciones", "Grandes plantas", "Infraestructura crítica (conceptual)"], tags: ["potencia","1000 kVA"]
  },
  {
    id: "vtx-012", code: "VTX-012", name: "Transformador seco 75 kVA", slug: "transformador-seco-75-kva",
    category: "Transformadores secos", type: "Transformador seco", price: 31500, currency: "PEN", stock: 4, featured: false, demo: true,
    image: "/images/products/transformador-seco-resina-a.jpg", gallery: ["/images/products/transformador-seco-resina-a.jpg", "/images/products/transformador-seco-resina-b.jpg"], unit: "unidad",
    short: "Alternativa seca de 75 kVA para entornos interiores simulados.",
    description: "Equipo demostrativo tipo seco para aplicaciones donde se busca una solución compacta y de instalación interior referencial.",
    specifications: { power: "75 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", temperature: "Clase F (155 °C)", insulation: "Resina epóxica fundida (IEC 60076-11)", cooling: "AN", standard: "IEC 60076-11 / IEEE C57.12.01", impedance: "6 % (típ.)", losses: "P0 ≈ 280 W / Pk ≈ 1600 W (típ.)", protection: "Sonda térmica PT100 y ventilación forzada opcional", mounting: "Interior, sala eléctrica", dimensions: "1200 x 900 x 1400 mm (est.)", weight: "620 kg (est.)" },
    applications: ["Edificaciones técnicas", "Industria ligera", "Salas eléctricas"], tags: ["seco","75 kVA"]
  },
  {
    id: "vtx-013", code: "VTX-013", name: "Transformador seco 150 kVA", slug: "transformador-seco-150-kva",
    category: "Transformadores secos", type: "Transformador seco", price: 49800, currency: "PEN", stock: 3, featured: false, demo: true,
    image: "/images/products/transformador-seco-resina-b.jpg", gallery: ["/images/products/transformador-seco-resina-b.jpg", "/images/products/transformador-seco-resina-c.jpg"], unit: "unidad",
    short: "Transformador seco de 150 kVA para espacios técnicos de mayor carga.",
    description: "Modelo ficticio de tipo seco con capacidad media para aplicaciones en interiores y proyectos de modernización conceptual.",
    specifications: { power: "150 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", temperature: "Clase F (155 °C)", insulation: "Resina epóxica fundida (IEC 60076-11)", cooling: "AN/AF", standard: "IEC 60076-11 / IEEE C57.12.01", impedance: "6 % (típ.)", losses: "P0 ≈ 450 W / Pk ≈ 2800 W (típ.)", protection: "Sondas PT100, ventiladores y relé térmico", mounting: "Interior, sala eléctrica", dimensions: "1350 x 980 x 1500 mm (est.)", weight: "890 kg (est.)" },
    applications: ["Hospitalidad técnica", "Comercio especializado", "Infraestructura interior"], tags: ["seco","150 kVA"]
  },
  {
    id: "vtx-014", code: "VTX-014", name: "Transformador seco 300 kVA", slug: "transformador-seco-300-kva",
    category: "Transformadores secos", type: "Transformador seco", price: 89500, currency: "PEN", stock: 2, featured: false, demo: true,
    image: "/images/products/transformador-seco-resina-c.jpg", gallery: ["/images/products/transformador-seco-resina-c.jpg", "/images/products/transformador-seco-resina-a.jpg"], unit: "unidad",
    short: "Mayor capacidad en tecnología seca para instalaciones demostrativas.",
    description: "Equipo de referencia en categoría seca con potencia elevada y ficha técnica orientativa para el prototipo.",
    specifications: { power: "300 kVA", phases: 3, primary: "10 kV", secondary: "0.4 kV", frequency: "60 Hz", vectorGroup: "Dyn11", temperature: "Clase F (155 °C)", insulation: "Resina epóxica fundida (IEC 60076-11)", cooling: "AN/AF", standard: "IEC 60076-11 / IEEE C57.12.01", impedance: "6 % (típ.)", losses: "P0 ≈ 750 W / Pk ≈ 4500 W (típ.)", protection: "Sondas PT100, ventiladores y relé térmico", mounting: "Interior, sala eléctrica", dimensions: "1500 x 1100 x 1650 mm (est.)", weight: "1280 kg (est.)" },
    applications: ["Centros comerciales técnicos", "Industria en interiores", "Proyectos de expansión"], tags: ["seco","300 kVA"]
  },
  {
    id: "vtx-015", code: "VTX-015", name: "Autotransformador industrial 30 kVA", slug: "autotransformador-industrial-30-kva",
    category: "Autotransformadores", type: "Autotransformador", price: 11900, currency: "PEN", stock: 5, featured: false, demo: true,
    image: "/images/products/autotransformador-industrial.jpg", gallery: ["/images/products/autotransformador-industrial.jpg", "/images/products/transformador-trifasico-pad-c.jpg"], unit: "unidad",
    short: "Autotransformador compacto para adaptación de niveles de tensión simulados.",
    description: "Producto demostrativo para aplicaciones de adecuación y arranque/control conceptual en entornos industriales.",
    specifications: { power: "30 kVA", phases: 3, primary: "0.44 kV", secondary: "0.38 kV", frequency: "60 Hz", vectorGroup: "Autotransformador", temperature: "Clase F (155 °C)", insulation: "Seco, aislamiento clase F (IEC 60076-11)", cooling: "AN", standard: "IEC 60076-11 / IEEE C57.12.01", impedance: "4 % (típ.)", losses: "P0 ≈ 90 W / Pk ≈ 350 W (típ.)", protection: "Interruptor automático y relé térmico", mounting: "Interior, tablero", dimensions: "780 x 520 x 900 mm (est.)", weight: "210 kg (est.)" },
    applications: ["Adecuación de tensión", "Tableros industriales", "Integración de equipos"], tags: ["autotransformador","30 kVA"]
  },
  {
    id: "vtx-016", code: "VTX-016", name: "Autotransformador industrial 60 kVA", slug: "autotransformador-industrial-60-kva",
    category: "Autotransformadores", type: "Autotransformador", price: 19800, currency: "PEN", stock: 4, featured: false, demo: true,
    image: "/images/products/autotransformador-industrial.jpg", gallery: ["/images/products/autotransformador-industrial.jpg", "/images/products/transformador-trifasico-pad-d.jpg"], unit: "unidad",
    short: "Mayor capacidad para ajustes de tensión en instalaciones de prueba.",
    description: "Autotransformador de 60 kVA con datos referenciales para acompañar soluciones de equipamiento y control.",
    specifications: { power: "60 kVA", phases: 3, primary: "0.44 kV", secondary: "0.38 kV", frequency: "60 Hz", vectorGroup: "Autotransformador", temperature: "Clase F (155 °C)", insulation: "Seco, aislamiento clase F (IEC 60076-11)", cooling: "AN", standard: "IEC 60076-11 / IEEE C57.12.01", impedance: "4 % (típ.)", losses: "P0 ≈ 140 W / Pk ≈ 600 W (típ.)", protection: "Interruptor automático y relé térmico", mounting: "Interior, tablero", dimensions: "900 x 600 x 980 mm (est.)", weight: "320 kg (est.)" },
    applications: ["Procesos industriales", "Adecuación eléctrica", "Montajes técnicos"], tags: ["autotransformador","60 kVA"]
  },
  {
    id: "vtx-017", code: "VTX-017", name: "Regulador automático de tensión 30 kVA", slug: "regulador-automatico-tension-30-kva",
    category: "Reguladores de tensión", type: "Regulador", price: 8900, currency: "PEN", stock: 7, featured: false, demo: true,
    image: "/images/products/regulador-tension-a.jpg", gallery: ["/images/products/regulador-tension-a.jpg", "/images/products/regulador-tension-b.jpg"], unit: "unidad",
    short: "Regulación referencial para proteger equipos ante variaciones simuladas.",
    description: "Regulador automático de tensión de 30 kVA para escenarios donde se requiere estabilidad eléctrica ilustrativa.",
    specifications: { power: "30 kVA", phases: 3, primary: "380/400 V", secondary: "380/400 V regulado", frequency: "60 Hz", range: "±10 % en 32 pasos (típ.)", insulation: "Aceite mineral ASTM D3487 (diseño seco opcional)", cooling: "ONAN", standard: "IEEE C57.15 / IEC 60214", impedance: "4 % (típ.)", losses: "P0 ≈ 120 W / Pk ≈ 500 W (típ.)", protection: "Control electrónico y derivación de bypass", mounting: "Pedestal o intemperie", dimensions: "700 x 480 x 900 mm (est.)", weight: "165 kg (est.)" },
    applications: ["Protección de equipos", "Estabilidad de suministro", "Instalaciones sensibles"], tags: ["regulador","30 kVA"]
  },
  {
    id: "vtx-018", code: "VTX-018", name: "Regulador automático de tensión 60 kVA", slug: "regulador-automatico-tension-60-kva",
    category: "Reguladores de tensión", type: "Regulador", price: 14900, currency: "PEN", stock: 5, featured: false, demo: true,
    image: "/images/products/regulador-tension-b.jpg", gallery: ["/images/products/regulador-tension-b.jpg", "/images/products/regulador-tension-a.jpg"], unit: "unidad",
    short: "Mayor capacidad de regulación para entornos con carga variable simulada.",
    description: "Modelo de 60 kVA del catálogo demostrativo, orientado a continuidad operativa y protección conceptual de sistemas.",
    specifications: { power: "60 kVA", phases: 3, primary: "380/400 V", secondary: "380/400 V regulado", frequency: "60 Hz", range: "±10 % en 32 pasos (típ.)", insulation: "Aceite mineral ASTM D3487 (diseño seco opcional)", cooling: "ONAN", standard: "IEEE C57.15 / IEC 60214", impedance: "4 % (típ.)", losses: "P0 ≈ 180 W / Pk ≈ 850 W (típ.)", protection: "Control electrónico y derivación de bypass", mounting: "Pedestal o intemperie", dimensions: "820 x 560 x 980 mm (est.)", weight: "240 kg (est.)" },
    applications: ["Líneas productivas", "Equipos críticos (conceptual)", "Mejora de calidad de energía"], tags: ["regulador","60 kVA"]
  },
  {
    id: "vtx-019", code: "VTX-019", name: "Tablero de distribución industrial", slug: "tablero-distribucion-industrial",
    category: "Tableros y celdas", type: "Tablero", price: 6800, currency: "PEN", stock: 9, featured: false, demo: true,
    image: "/images/products/tablero-distribucion.jpg", gallery: ["/images/products/tablero-distribucion.jpg", "/images/products/seccionador-baja-tension.jpg"], unit: "equipo",
    short: "Tablero demostrativo para organización y distribución de circuitos.",
    description: "Solución de tablero para representar distribución y seccionamiento en instalaciones industriales simuladas.",
    specifications: { power: "No aplica", phases: 3, primary: "0.4 kV", secondary: "Circuitos derivados", frequency: "60 Hz", ratedCurrent: "250 A", insulation: "Aire y dieléctrico sólido en barras", protection: "Grado IP42 (típ.)", standard: "IEC 61439-2", mounting: "Interior, montaje en piso", dimensions: "800 x 400 x 1800 mm (est.)", weight: "120 kg (est.)" },
    applications: ["Distribución interna", "Salas eléctricas", "Montajes industriales"], tags: ["tablero","distribución"]
  },
  {
    id: "vtx-020", code: "VTX-020", name: "Tablero de control eléctrico", slug: "tablero-control-electrico",
    category: "Tableros y celdas", type: "Tablero de control", price: 9600, currency: "PEN", stock: 6, featured: false, demo: true,
    image: "/images/products/tablero-control.jpg", gallery: ["/images/products/tablero-control.jpg", "/images/products/tablero-distribucion.jpg"], unit: "equipo",
    short: "Control y maniobra referencial para procesos eléctricos y automatizados.",
    description: "Tablero de control demostrativo para mostrar integración con soluciones de ingeniería y automatización industrial.",
    specifications: { power: "No aplica", phases: 3, primary: "0.4 kV", secondary: "Señales y control", frequency: "60 Hz", ratedCurrent: "63 A (típ.)", insulation: "Aire y bornes protegidos", protection: "Grado IP54 (típ.)", standard: "IEC 61439-2 / IEC 61131", mounting: "Interior, montaje en piso", dimensions: "900 x 450 x 1900 mm (est.)", weight: "150 kg (est.)" },
    applications: ["Automatización", "Control de motores", "Procesos industriales"], tags: ["tablero","control"]
  },
  {
    id: "vtx-021", code: "VTX-021", name: "Celda de media tensión", slug: "celda-media-tension",
    category: "Tableros y celdas", type: "Celda", price: 39500, currency: "PEN", stock: 2, featured: false, demo: true,
    image: "/images/products/celda-media-tension.jpg", gallery: ["/images/products/celda-media-tension.jpg", "/images/products/celda-media-tension-b.jpg"], unit: "equipo",
    short: "Celda demostrativa para seccionamiento y protección en media tensión.",
    description: "Elemento de catálogo para representar infraestructura de media tensión en aplicaciones de distribución e industria.",
    specifications: { power: "No aplica", phases: 3, primary: "13.2/22.9 kV", secondary: "Seccionamiento MT", frequency: "60 Hz", ratedCurrent: "630 A", insulation: "Aire o SF6 (según diseño)", protection: "Grado IP3X (típ.)", standard: "IEC 62271-200", mounting: "Interior, sala de celdas", dimensions: "1100 x 1200 x 2200 mm (est.)", weight: "780 kg (est.)" },
    applications: ["Subestaciones", "Distribución", "Plantas industriales"], tags: ["celda","media tensión"]
  },
  {
    id: "vtx-022", code: "VTX-022", name: "Seccionador de media tensión", slug: "seccionador-media-tension",
    category: "Protección eléctrica", type: "Seccionador", price: 4200, currency: "PEN", stock: 10, featured: false, demo: true,
    image: "/images/products/seccionador-industrial.jpg", gallery: ["/images/products/seccionador-industrial.jpg", "/images/products/celda-media-tension-b.jpg"], unit: "unidad",
    short: "Dispositivo de seccionamiento en media tensión para maniobras y mantenimiento simulado.",
    description: "Seccionador de media tensión de ejemplo para complementar soluciones de protección y operación segura en el prototipo.",
    specifications: { power: "No aplica", phases: 3, primary: "13.2/22.9 kV", secondary: "No aplica", frequency: "60 Hz", ratedCurrent: "400 A", insulation: "Polímero y dieléctrico sólido", protection: "Grado IP20 (típ.)", standard: "IEC 62271-102", mounting: "Intemperie, poste o estructura", dimensions: "420 x 220 x 380 mm (est.)", weight: "18 kg (est.)" },
    applications: ["Maniobra eléctrica", "Redes de distribución", "Mantenimiento programado"], tags: ["seccionador","media tensión","protección"]
  },
  {
    id: "vtx-023", code: "VTX-023", name: "Pararrayos de distribución", slug: "pararrayos-distribucion",
    category: "Protección eléctrica", type: "Pararrayos", price: 1250, currency: "PEN", stock: 20, featured: false, demo: true,
    image: "/images/products/pararrayos-distribucion.jpg", gallery: ["/images/products/pararrayos-distribucion.jpg", "/images/products/pararrayos-distribucion-b.jpg"], unit: "unidad",
    short: "Protección referencial contra sobretensiones en redes de distribución.",
    description: "Accesorio de protección demostrativo para acompañar esquemas de distribución eléctrica y confiabilidad conceptual.",
    specifications: { power: "No aplica", phases: "No aplica", primary: "10-22.9 kV", secondary: "No aplica", frequency: "60 Hz", ratedCurrent: "10 kA nominal (típ.)", insulation: "Silicón polimérico", protection: "Descarga atmosférica y maniobra", standard: "IEC 60099-4", mounting: "En línea o poste", dimensions: "320 x 120 mm (est.)", weight: "3.5 kg (est.)" },
    applications: ["Redes de distribución", "Protección de equipos", "Subestaciones compactas"], tags: ["pararrayos","protección"]
  },
  {
    id: "vtx-024", code: "VTX-024", name: "Aceite dieléctrico, presentación industrial", slug: "aceite-dielectrico-presentacion-industrial",
    category: "Accesorios y materiales", type: "Insumo", price: 780, currency: "PEN", stock: 30, featured: false, demo: true,
    image: "/images/products/aceite-dielectrico.jpg", gallery: ["/images/products/aceite-dielectrico.jpg", "/images/products/transformador-distribucion-630.jpg"], unit: "tambor/cilindro ref.",
    short: "Insumo demostrativo para mantenimiento y gestión de transformadores.",
    description: "Presentación industrial referencial de aceite dieléctrico para actividades de mantenimiento y reposición ilustrativa.",
    specifications: { power: "No aplica", phases: "No aplica", primary: "Uso en transformadores", secondary: "Presentación industrial", frequency: "No aplica", insulation: "Fluido dieléctrico mineral", protection: "Rigidez dieléctrica ≥ 30 kV (típ.)", standard: "ASTM D3487 / IEC 60296", packaging: "Tambor de 200 L", mounting: "Almacén de insumos", dimensions: "Tambor estándar de 200 L (est.)", weight: "≈ 170 kg por tambor (est.)" },
    applications: ["Mantenimiento de transformadores", "Reposición referencial", "Gestión de activos"], tags: ["aceite","insumo","mantenimiento"]
  }
];

export const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
