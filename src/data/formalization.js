export const formalizationTimeline = [
  { step:1, title:'Búsqueda y reserva del nombre', desc:'Verificación de denominación social y reserva como paso inicial del proyecto.', entity:'SUNARP / Registros', ref:'Función registral de denominaciones.', time:'1-2 días (ref.)', cost:'S/ 20 – S/ 30 (ref.)' },
  { step:2, title:'Elaboración de minuta', desc:'Redacción del acto constitutivo y estatuto según el escenario académico.', entity:'Abogado / notaría (referencial)', ref:'Formalización de acuerdo societario.', time:'1-3 días (ref.)', cost:'S/ 150 – S/ 400 (ref.)' },
  { step:3, title:'Aporte del capital social', desc:'Depósito o acreditación del aporte según lo proyectado.', entity:'Entidad financiera', ref:'Constancia de aporte.', time:'1 día (ref.)', cost:'Según entidad (ref.)' },
  { step:4, title:'Escritura pública', desc:'Elevación de la minuta a escritura pública.', entity:'Notaría', ref:'Instrumento público constitutivo.', time:'1-2 días (ref.)', cost:'S/ 450 – S/ 900 (ref.)' },
  { step:5, title:'Inscripción en registros públicos', desc:'Inscripción de la persona jurídica en el registro correspondiente.', entity:'SUNARP', ref:'Obtención de personería jurídica.', time:'3-7 días (ref.)', cost:'S/ 120 – S/ 200 (ref.)' },
  { step:6, title:'RUC y régimen tributario', desc:'Inscripción tributaria y elección de régimen en el escenario propuesto.', entity:'SUNAT', ref:'RUC y obligaciones formales.', time:'1 día (ref.)', cost:'S/ 0 (ref.)' },
  { step:7, title:'Licencias y autorizaciones municipales', desc:'Gestiones para funcionamiento según actividad y local.', entity:'Municipalidad', ref:'Licencia de funcionamiento (según aplique).', time:'3-10 días (ref.)', cost:'S/ 200 – S/ 1,200 (ref.)' },
  { step:8, title:'Condiciones de seguridad e ITSE', desc:'Evaluación de condiciones de seguridad en edificaciones cuando corresponda.', entity:'Municipalidad / órgano competente', ref:'ITSE según nivel de riesgo.', time:'Variable (ref.)', cost:'S/ 150 – S/ 600 (ref.)' },
  { step:9, title:'Régimen laboral y registros', desc:'Preparación de obligaciones laborales y registros del empleador.', entity:'MTPE / SUNAT / entidades de seguridad social', ref:'Alta y gestión laboral.', time:'1-3 días (ref.)', cost:'S/ 0 – S/ 200 (ref.)' },
  { step:10, title:'Implementación de obligaciones de seguridad', desc:'Organización interna de seguridad y salud en el trabajo.', entity:'Empresa / SST', ref:'Prevención y cumplimiento interno.', time:'Continuo (ref.)', cost:'S/ 300 – S/ 2,000+ (ref.)' },
];

export const budget = {
  range: 'S/ 2,700 – S/ 5,800', note: 'Rango estimado referencial del informe. No incluye el capital social.',
  items: [
    { concept:'Reserva de nombre', value:'S/ 20 – S/ 30' },
    { concept:'Elaboración de minuta/asesoría', value:'S/ 150 – S/ 400' },
    { concept:'Escritura pública', value:'S/ 450 – S/ 900' },
    { concept:'Inscripción registral', value:'S/ 120 – S/ 200' },
    { concept:'Licencias municipales', value:'S/ 200 – S/ 1,200' },
    { concept:'ITSE / seguridad edilicia', value:'S/ 150 – S/ 600' },
    { concept:'Implementación inicial SST/operativa', value:'S/ 300 – S/ 2,000+' },
    { concept:'Otros gastos administrativos', value:'S/ 200 – S/ 470' },
  ]
};

export const capital = { total:'S/ 150,000', partners:5, percent:'20 % por socio', shares:'1,500 acciones nominativas', nominal:'S/ 100 por acción' };

export const risks = [
  { risk:'Observaciones registrales', measure:'Revisar coherencia de datos y documentos antes de presentar.' },
  { risk:'Inconsistencias del domicilio fiscal', measure:'Verificar condición del local y documentación sustentatoria.' },
  { risk:'Errores en documentación', measure:'Control de calidad documental y asesoría técnica referencial.' },
  { risk:'Retrasos municipales', measure:'Planificar plazos, requisitos y seguimiento de expediente.' },
  { risk:'Incumplimientos laborales', measure:'Definir obligaciones, registros y políticas internas desde el inicio.' },
  { risk:'Falta de seguridad en el establecimiento', measure:'Implementar medidas de prevención y condiciones básicas de seguridad.' },
];
