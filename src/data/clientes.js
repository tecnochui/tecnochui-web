// Clientes fijos. Para ocultar uno, pon  mostrar: false  (no hace falta borrarlo).
// IMPORTANTE: antes de publicar en main, confirmar con cada cliente que acepta
// aparecer con su nombre y enlace.
//
// desde:  año en que empezó la relación (null si no se conoce)
// que:    qué se hace para ellos
// web:    enlace opcional (sitio o Instagram)

export const clientes = [
  {
    nombre: 'Manufacturas y Servicios ALCADI (Termax)',
    sector: 'Aires acondicionados',
    desde: 2019,
    que: 'Toda la infraestructura tecnológica y el soporte técnico',
    web: 'https://www.termax.com.ve',
    mostrar: true,
  },
  {
    nombre: 'Laboratorio Clínico Analizar',
    sector: 'Salud',
    desde: 2018,
    que: 'Toda la infraestructura tecnológica y el soporte técnico',
    web: 'https://analizar.com.ve/',
    mostrar: true,
  },
  {
    nombre: 'Centro de Servicio Tecno (Servimóvil)',
    sector: 'Centro de servicio',
    desde: 2023,
    que: 'Toda la infraestructura tecnológica y el soporte técnico',
    web: null,
    mostrar: true,
  },
  {
    nombre: 'Tecnotropolis Venezuela',
    sector: null,
    desde: null,
    que: null,
    web: null,
    mostrar: true,
  },
  {
    nombre: 'Global Care Pharma',
    sector: null,
    desde: null,
    que: null,
    web: 'https://www.instagram.com/globalcarepharmaca/',
    mostrar: true,
  },
];

export const clientesVisibles = () => clientes.filter((c) => c.mostrar);

/** Año de inicio de la relación más antigua (para "clientes desde 20XX"). */
export const desdeMasAntiguo = () =>
  Math.min(...clientesVisibles().map((c) => c.desde).filter(Boolean));
