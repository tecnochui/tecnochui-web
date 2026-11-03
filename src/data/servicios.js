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
    slug: 'infraestructura-servidores',
    nombre: 'Servidores e infraestructura',
    icon: 'server',
    term: '$ systemctl status',
    contacto: 'infraestructura',
    recurso: 'checklist-salud-servidores',
    corto: 'Servidores, usuarios y respaldos en orden para que tu información esté segura y disponible.',
    h1: 'Servidores, Active Directory y respaldos para tu empresa',
    seoTitle: 'Servidores, Active Directory y respaldos en Caracas | Tecnochui',
    seoDesc:
      'Administración de Windows Server, Active Directory, Linux, NAS/TrueNAS y planes de respaldo y recuperación ante desastres para empresas en Caracas.',
    lead: 'Más de 8 años administrando infraestructura tecnológica: servidores bien configurados, usuarios con los permisos correctos y respaldos que sí se pueden restaurar.',
    problemas: [
      'Archivos compartidos desordenados y sin control de quién accede',
      'Cada empleado con claves distintas en cada equipo, sin administración central',
      'Respaldos que nadie ha probado restaurar',
      'Un servidor viejo que, si falla, detiene la operación',
      'No saber qué pasaría si se pierde la información',
    ],
    paraQuien:
      'Empresas con varios equipos que comparten archivos, sistemas administrativos o bases de datos y necesitan orden, control y continuidad.',
    items: [
      'Administración de Active Directory con Windows Server',
      'Instalación, configuración y administración de Linux (CLI y gráfico): Debian, Ubuntu, Linux Mint',
      'Configuración y administración de LDAP Samba, e implementación de GPO en dominios',
      'Instalación, configuración y administración de NAS y TrueNAS',
      'Diseño e implementación de políticas de copias de seguridad y recuperación ante desastres (DRP)',
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
    ],
  },
  {
    slug: 'virtualizacion-nube',
    nombre: 'Virtualización y nube privada',
    icon: 'layers',
    term: '$ docker ps',
    contacto: 'virtualizacion',
    recurso: 'checklist-antes-de-virtualizar',
    corto: 'Aprovecha mejor tus servidores y ten tu propia nube privada para archivos y colaboración.',
    h1: 'Virtualización y nube privada para pymes',
    seoTitle: 'Virtualización (Proxmox, Hyper-V) y nube privada | Tecnochui',
    seoDesc:
      'Virtualización con Proxmox, VMware ESXi y Hyper-V, contenedores Docker y nube privada con Nextcloud para pymes en Venezuela.',
    lead: 'Consolida varios servidores en uno, reduce costos de hardware y mantén el control de tus datos con una nube privada propia.',
    problemas: [
      'Varios servidores físicos viejos y costosos de mantener',
      'Licenciamiento que se encarece cada año',
      'Depender de servicios externos para compartir archivos',
      'Aplicaciones que se caen por no tener un entorno estable',
      'Dificultad para hacer pruebas sin afectar lo que está en producción',
    ],
    paraQuien:
      'Pymes con servidores propios o varias aplicaciones, y organizaciones que prefieren que sus datos permanezcan bajo su control.',
    items: [
      'Instalación, configuración y administración de hipervisores: Proxmox, VMware ESXi, Hyper-V',
      'Implementación y gestión de Docker y entornos de contenedorización para producción',
      'Instalación, configuración y administración de nubes privadas con Nextcloud',
      'Integración de herramientas colaborativas en entornos seguros',
    ],
    faqs: [
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
      'Desarrollo web seguro apoyado en IA, siguiendo normas NIST e ISO',
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
    nombre: 'Capacitación, IA y gobierno digital',
    icon: 'academic',
    term: '$ man tecnochui',
    contacto: 'capacitacion-ia',
    recurso: 'checklist-uso-seguro-ia',
    corto: 'Capacita a tu equipo en ciberseguridad y en el uso responsable de la inteligencia artificial.',
    h1: 'Capacitación en ciberseguridad, IA y gobierno digital',
    seoTitle: 'Cursos de ciberseguridad e IA para pymes y gerentes | Tecnochui',
    seoDesc:
      'Cursos y asesoría en ciberseguridad, uso responsable de IA, gobierno electrónico y Ley de Infogobierno para pymes, gerentes y organismos.',
    lead: 'Combino la experiencia técnica con la formación en derecho para explicar la tecnología y su marco legal en un lenguaje que se entiende.',
    problemas: [
      'Empleados que caen en correos falsos',
      'Uso de herramientas de IA sin reglas sobre qué información compartir',
      'Directivos que no saben qué riesgos tecnológicos están asumiendo',
      'Organismos que necesitan alinearse con la Ley de Infogobierno',
      'Falta de manuales y procedimientos escritos',
    ],
    paraQuien:
      'Gerentes, directores, equipos de trabajo y organismos públicos o privados que quieren usar la tecnología de forma segura y responsable.',
    items: [
      'Cursos de ciberseguridad para PyMES, gerentes y directores',
      'Capacitación en ciberseguridad para usuarios finales',
      'Cursos especializados para el uso correcto de la IA en entornos públicos y privados',
      'Asesoría en Ley de Infogobierno y políticas de gobierno electrónico',
      'Elaboración de manuales y procedimientos técnicos, de ciberseguridad y de soporte',
    ],
    faqs: [
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
];

export const getServicio = (slug) => servicios.find((s) => s.slug === slug);
