// Datos globales del sitio. Editar aquí cambia todo el sitio a la vez.
export const SITE = {
  nombre: 'Tecnochui',
  url: 'https://www.tecnochui.com.ve',
  titular: 'Jesús Andrade',
  email: 'jesus.andrade@tecnochui.com.ve',
  telefono: '+58 424 289 0416',
  whatsapp: '584242890416',
  ciudad: 'Caracas',
  pais: 'Venezuela',
  formEndpoint: 'https://formspree.io/f/maqrjrbk',
  respuesta: 'menos de 2 horas en horario laboral',
  redes: [
    { label: 'Instagram', href: 'https://www.instagram.com/tecnochui/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tecnochui' },
    { label: 'Telegram', href: 'https://t.me/tecnochui' },
    { label: 'X', href: 'https://x.com/tecnochui' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tecnochui' },
    { label: 'GitHub', href: 'https://github.com/tecnochui' },
  ],
};

/** Enlace de WhatsApp con mensaje prellenado. */
export const waLink = (mensaje) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const WA_DIAGNOSTICO =
  'Hola Jesús, vi la web de Tecnochui y quiero pedir un diagnóstico gratis.';
