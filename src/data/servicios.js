// Las seis áreas de trabajo de Tecnochui. Cada una genera su propia página
// en /servicios/<slug>. Editar aquí actualiza portada, listado y páginas.
//
// contacto: valor del <select> del formulario de /contacto.
// recurso:  slug del checklist gratuito asociado (ver recursos.js).

export const servicios = [
  {
    slug: 'soporte-tecnico',
    nombre: 'Soporte técnico',
    icon: 'support',
    term: '$ htop --sys-health',
    contacto: 'soporte-tecnico',
    recurso: 'checklist-mantenimiento-pc',
    corto: 'Tus PC y laptops funcionando, con atención rápida cuando algo falla.',
    h1: 'Soporte técnico de PC y laptops en Caracas',
    seoTitle: 'Soporte técnico de PC y laptops en Caracas | Tecnochui',
    seoDesc:
      'Diagnóstico, mantenimiento y soporte técnico de PC, laptops, redes y servidores en Caracas. Diagnóstico gratis y respuesta en menos de 2 horas.',
    lead: 'Más de 18 años resolviendo fallas de PC y laptops en oficinas y hogares. Diagnostico el problema y te explico, en lenguaje claro, qué pasa y qué opciones tienes.',
    problemas: [
      'Equipos lentos, que se traban o no encienden',
      'Virus, ventanas emergentes y correos sospechosos',
      'Impresoras, WiFi o correo que dejan de funcionar',
      'Empleados parados esperando que alguien los atienda',
      'Equipos viejos que no sabes si reparar o reemplazar',
    ],
    paraQuien:
      'Pymes, consultorios, oficinas y profesionales independientes que no tienen un departamento de TI propio, y personas que necesitan que su equipo funcione.',
    items: [
      'Soporte técnico a PC y laptops (Windows/Linux): diagnóstico, mantenimiento correctivo y preventivo',
      'Atención de usuarios y helpdesk con tiempos de respuesta rápidos',
      'Soporte a redes y servidores en sitio o remoto',
    ],
    faqs: [
      {
        q: '¿El diagnóstico tiene costo?',
        a: 'No. El diagnóstico es gratis. Si el caso requiere una visita técnica en sitio, esa visita se cotiza aparte.',
      },
      {
        q: '¿Atienden en sitio o de forma remota?',
        a: 'Ambas. Muchos problemas se resuelven de forma remota; cuando hace falta presencia física, coordinamos una visita en sitio.',
      },
      {
        q: '¿Qué tan rápido responden?',
        a: 'El tiempo de respuesta es de menos de 2 horas en horario laboral.',
      },
    ],
  },
  {
    slug: 'servidores-virtualizacion-nube',
    nombre: 'Servidores, virtualización y nube privada',
    icon: 'server',
    term: '$ systemctl status',
    contacto: 'servidores-nube',
    recurso: 'checklist-servidores-virtualizacion',
    corto: 'Servidores, usuarios y respaldos en orden, con virtualización y tu propia nube privada.',
    h1: 'Servidores, virtualización y nube privada para tu empresa',
    seoTitle: 'Servidores, virtualización y nube privada | Tecnochui',
    seoDesc:
      'Windows Server, Active Directory, Linux, Proxmox, Hyper-V, VMware, Docker, NAS/TrueNAS, Nextcloud y respaldos para empresas en Caracas y Venezuela.',
    lead: 'Más de 8 años administrando infraestructura tecnológica: servidores bien configurados, usuarios con los permisos correctos, respaldos que sí se pueden restaurar y, cuando conviene, virtualización para aprovechar mejor el hardware y una nube privada propia.',
    problemas: [
      'Archivos compartidos desordenados y sin control de quién accede',
      'Cada empleado con claves distintas en cada equipo, sin administración central',
      'Respaldos que nadie ha probado restaurar',
      'Varios servidores físicos viejos y costosos que, si fallan, detienen la operación',
      'Licenciamiento que se encarece o dependencia de servicios externos para compartir archivos',
      'No saber qué pasaría si se pierde la información',
    ],
    paraQuien:
      'Empresas con varios equipos que comparten archivos, sistemas administrativos o bases de datos, y organizaciones que quieren aprovechar mejor sus servidores o mantener sus datos bajo su control.',
    items: [
      'Administración de Active Directory con Windows Server',
      'Instalación, configuración y administración de Linux (CLI y gráfico): Debian, Ubuntu, Linux Mint',
      'Configuración y administración de LDAP Samba, e implementación de GPO en dominios',
      'Instalación, configuración y administración de NAS y TrueNAS',
      'Diseño e implementación de políticas de copias de seguridad y recuperación ante desastres (DRP)',
      'Instalación, configuración y administración de hipervisores: Proxmox, VMware ESXi, Hyper-V',
      'Implementación y gestión de Docker y entornos de contenedorización para producción',
      'Instalación, configuración y administración de nubes privadas con Nextcloud',
      'Integración de herramientas colaborativas en entornos seguros',
    ],
    faqs: [
      {
        q: '¿Qué es Active Directory y lo necesita mi empresa?',
        a: 'Es el sistema que centraliza usuarios, claves y permisos de los equipos de una organización. Resulta útil cuando tienes varios empleados y quieres controlar quién accede a qué. En el diagnóstico te digo si tiene sentido en tu caso.',
      },
      {
        q: '¿Qué es un plan de recuperación ante desastres (DRP)?',
        a: 'Es el plan que define cómo recuperar tus sistemas y datos si ocurre una falla grave: qué se respalda, dónde, cada cuánto y cuánto tarda en restaurarse.',
      },
      {
        q: '¿Proxmox o VMware?',
        a: 'Depende del presupuesto, del equipo que lo va a operar y de lo que necesites. En el blog tenemos una comparación: «Proxmox vs VMware ESXi».',
      },
      {
        q: '¿Qué es Nextcloud?',
        a: 'Es una plataforma de código abierto para almacenar y compartir archivos, calendarios y contactos en tu propia infraestructura, como alternativa a servicios de nube de terceros.',
      },
    ],
  },
  {
    slug: 'redes-conectividad',
    nombre: 'Redes y conectividad',
    icon: 'network',
    term: '$ ping gateway',
    contacto: 'redes',
    recurso: 'checklist-red-wifi-oficina',
    corto: 'Internet y WiFi estables en toda la oficina, con cableado ordenado.',
    h1: 'Redes, WiFi y cableado estructurado en Caracas',
    seoTitle: 'Redes, WiFi y cableado estructurado en Caracas | Tecnochui',
    seoDesc:
      'Diseño e instalación de redes LAN/WAN, WiFi, switches y cableado estructurado para oficinas y empresas en Caracas.',
    lead: 'Una red bien diseñada es la que nadie nota porque simplemente funciona. Diseño, instalo y administro redes para oficinas y empresas.',
    problemas: [
      'WiFi que se cae o no llega a todas las áreas',
      'Internet lento aunque pagues un buen plan',
      'Cables desordenados, sin etiquetar y difíciles de mantener',
      'Equipos que se desconectan o impresoras que no aparecen en la red',
      'Una oficina nueva o remodelada que necesita red desde cero',
    ],
    paraQuien:
      'Oficinas, locales y empresas que se mudan, amplían espacios o sufren problemas de conexión.',
    items: [
      'Diseño e instalación de cableado estructurado y redes inalámbricas (WiFi)',
      'Instalación, configuración y administración de switches',
      'Diseño y administración de redes LAN/WAN',
      'Consultoría en infraestructura de conectividad',
    ],
    faqs: [
      {
        q: '¿Se puede mejorar el WiFi sin cambiar todo?',
        a: 'En muchos casos sí: primero se revisa cobertura, ubicación de los equipos y configuración. El diagnóstico dice si bastan ajustes o si hace falta equipo nuevo.',
      },
      {
        q: '¿Qué es el cableado estructurado?',
        a: 'Es una instalación ordenada y normalizada de cables de red, tomas y paneles que permite conectar equipos de forma estable y facilita el mantenimiento futuro.',
      },
    ],
  },
  {
    slug: 'ciberseguridad',
    nombre: 'Ciberseguridad y firewalls',
    icon: 'shield',
    term: '$ ufw status',
    contacto: 'ciberseguridad',
    recurso: 'checklist-ciberseguridad-pymes',
    corto: 'Protege tu negocio de fraudes, virus y accesos no autorizados, con reglas claras.',
    h1: 'Ciberseguridad y firewalls para pymes en Venezuela',
    seoTitle: 'Ciberseguridad y firewalls para pymes en Venezuela | Tecnochui',
    seoDesc:
      'Firewalls (Sophos, Meraki, pfSense, OPNsense), políticas de seguridad y auditoría NIST/ISO para pymes en Caracas y Venezuela.',
    lead: 'Las pymes también son objetivo de fraudes, ransomware y robo de cuentas. Te ayudo a cerrar las puertas más comunes sin complicarte la operación.',
    problemas: [
      'Correos falsos (phishing) que piden claves o pagos',
      'Cuentas de correo o redes sociales de la empresa que fueron hackeadas',
      'Computadoras bloqueadas por ransomware',
      'Una red sin firewall o con la configuración de fábrica',
      'No tener reglas claras de contraseñas y accesos',
    ],
    paraQuien:
      'Cualquier empresa que maneje correo, información de clientes, pagos o sistemas administrativos, es decir, casi todas.',
    items: [
      'Instalación y configuración de firewalls: Sophos XG, Cisco Meraki, pfSense, OPNsense',
      'Gestión de políticas de seguridad con UFW e IPTables',
      'Diseño e implementación de políticas de ciberseguridad',
      'Auditoría y cumplimiento normativo (NIST, ISO)',
    ],
    faqs: [
      {
        q: '¿Mi pyme necesita un firewall?',
        a: 'Si tienes una red de oficina, sí: es la primera barrera entre tu red e internet. Hay opciones desde software libre (pfSense, OPNsense) hasta equipos comerciales (Sophos, Meraki); la elección depende del tamaño y el presupuesto.',
      },
      {
        q: '¿Qué es una auditoría NIST o ISO?',
        a: 'Es una revisión de tu seguridad contra un marco reconocido (como NIST o ISO 27001) para identificar brechas y priorizar qué corregir primero.',
      },
    ],
  },
  {
    slug: 'capacitacion-ia-gobierno-digital',
    nombre: 'Capacitación, uso correcto de la IA y gobierno digital',
    icon: 'academic',
    term: '$ man tecnochui',
    contacto: 'capacitacion-ia',
    recurso: 'checklist-uso-seguro-ia',
    corto: 'Capacita a tu equipo en ciberseguridad y en el uso correcto de la inteligencia artificial.',
    h1: 'Capacitación en ciberseguridad, uso correcto de la IA y gobierno digital',
    seoTitle: 'Cursos de ciberseguridad y uso correcto de la IA | Tecnochui',
    seoDesc:
      'Cursos y asesoría en ciberseguridad, uso correcto de la IA, gobierno electrónico y Ley de Infogobierno para pymes, gerentes y organismos.',
    lead: 'Combino la experiencia técnica con la formación en derecho para explicar la tecnología y su marco legal en un lenguaje que se entiende.',
    problemas: [
      'Empleados que caen en correos falsos',
      'Uso de herramientas de IA sin reglas sobre qué información compartir',
      'Directivos que no saben qué riesgos tecnológicos están asumiendo',
      'Organismos que necesitan alinearse con la Ley de Infogobierno',
      'Falta de manuales y procedimientos escritos',
    ],
    paraQuien:
      'Gerentes, directores, equipos de trabajo y organismos públicos o privados que quieren usar la tecnología, y la IA en particular, de forma segura y correcta.',
    items: [
      'Cursos de ciberseguridad para PyMES, gerentes y directores',
      'Capacitación en ciberseguridad para usuarios finales',
      'Cursos especializados para el uso correcto de la IA en entornos públicos y privados',
      'Asesoría en Ley de Infogobierno y políticas de gobierno electrónico',
      'Elaboración de manuales y procedimientos técnicos, de ciberseguridad y de soporte',
    ],
    faqs: [
      {
        q: '¿Qué significa usar bien la IA en una empresa?',
        a: 'Saber para qué sirve, qué información nunca se le comparte, cómo verificar lo que responde y qué reglas fijar para el equipo. Aquí se enseña a usarla, no a programar con ella (eso es el servicio de desarrollo asistido con IA).',
      },
      {
        q: '¿Dan cursos a empresas o a personas?',
        a: 'A ambos: cursos para equipos de pymes, gerentes y directores, y clases privadas para personas.',
      },
      {
        q: '¿Qué cubre la asesoría en Ley de Infogobierno?',
        a: 'Orientación técnica y legal para organismos que implementan servicios de gobierno electrónico y políticas de gobierno digital.',
      },
    ],
  },
  {
    slug: 'desarrollo-asistido-ia',
    nombre: 'Desarrollo asistido con IA',
    icon: 'code',
    term: '$ git commit',
    contacto: 'desarrollo-ia',
    recurso: 'checklist-antes-de-encargar-software',
    corto: 'Sitios web, aplicaciones, APIs y sistemas a la medida, construidos con apoyo de IA y revisión humana.',
    h1: 'Desarrollo web y APIs a la medida, asistido con IA',
    seoTitle: 'Desarrollo web y APIs a la medida con IA | Tecnochui',
    seoDesc:
      'Sitios y aplicaciones web, APIs y sistemas a la medida, desarrollados con apoyo de IA y revisión humana, para pymes y organizaciones en Venezuela.',
    lead: 'Uso la inteligencia artificial como herramienta para construir con más rapidez, y soy yo quien diseña, revisa, prueba y documenta cada entrega. Sirve para sitios web, aplicaciones, APIs y sistemas a la medida.',
    problemas: [
      'Necesitas un sitio o un sistema y no sabes por dónde empezar',
      'Procesos que haces a mano, en papel o en hojas de cálculo, y quieres automatizar',
      'Programas que no se comunican entre sí y necesitan conectarse (APIs)',
      'Una idea de aplicación que quieres probar sin meses de desarrollo',
      'Un sistema a medida que nadie documentó y nadie sabe mantener',
    ],
    paraQuien:
      'Pymes, profesionales y organizaciones que necesitan un sitio, una aplicación o una integración a la medida, y quieren entender qué se construye y quién lo mantiene.',
    items: [
      'Desarrollo de sitios y aplicaciones web a la medida, con apoyo de IA',
      'Diseño y desarrollo de APIs e integración entre sistemas',
      'Sistemas y herramientas internas personalizadas para tu negocio',
      'Automatización de tareas repetitivas con scripts',
      'Desarrollo web seguro, siguiendo normas NIST e ISO',
      'Documentación técnica del proyecto y entrega ordenada del código',
    ],
    faqs: [
      {
        q: '¿Qué significa desarrollo asistido con IA?',
        a: 'Que uso herramientas de inteligencia artificial para acelerar la escritura de código y de documentación, pero el diseño, la revisión, las pruebas y la seguridad los hago yo. La IA es una herramienta; no sustituye la revisión humana.',
      },
      {
        q: '¿Haces APIs e integraciones?',
        a: 'Sí: diseño y desarrollo de APIs, y conexión entre sistemas que hoy no se comunican entre sí.',
      },
      {
        q: '¿Quién se queda con el código?',
        a: 'Es un punto que se define por escrito antes de empezar. Lo recomendable es que el código, el dominio y los accesos queden a nombre de quien encarga el proyecto.',
      },
    ],
  },
];

export const getServicio = (slug) => servicios.find((s) => s.slug === slug);
