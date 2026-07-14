/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Este es el archivo que debes editar para personalizar tu landing page.
 * Cambia los textos, colores y datos de contacto aqui.
 * Los cambios se aplicaran automaticamente en toda la pagina.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "Control Satelital Integral",
  tagline: "Control total de tu operacion, en tiempo real y desde una sola plataforma.",
  description:
    "GPS satelital, videovigilancia remota, localizacion ferroviaria y radiocomunicacion encriptada para empresas y gobierno.",

  // ─────────────────────────────────────────────
  // SECCION HERO (la primera pantalla que ven los visitantes)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Soluciones para operaciones criticas",
    title: "Control total de tu operacion,",
    titleHighlight: "en tiempo real",
    subtitle:
      "GPS satelital, videovigilancia remota, localizacion ferroviaria y radiocomunicacion encriptada integradas para empresas y gobiernos que no pueden perder visibilidad ni seguridad en campo.",
    ctaPrimary: "Solicitar demostracion",
    ctaSecondary: "Ver soluciones",
    ctaPrimaryUrl: "#contacto",
    ctaSecondaryUrl: "#features",
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (seccion de caracteristicas)
  // ─────────────────────────────────────────────
  features: {
    heading: "Soluciones para cada operacion critica",
    subheading:
      "Tecnologia satelital y comunicacion segura adaptada a ferrocarriles, centros de comando y equipos en campo.",
    items: [
      {
        icon: "lightning",
        title: "Ferromex y operadores ferroviarios",
        description:
          "Donde esta cada vagon ahora mismo? Monitorea tu flota ferroviaria en tiempo real por satelite, con una plataforma personalizada que te da control operativo sin depender de reportes manuales.",
      },
      {
        icon: "settings",
        title: "C4, C5 y centros de comando",
        description:
          "Comunicacion critica, sin comprometer la seguridad. Integra radiocomunicacion con la mas alta encriptacion y pasa por consola sin perder proteccion. Menos riesgo. Mas confianza en cada enlace.",
      },
      {
        icon: "mobile",
        title: "Municipios y equipos en campo",
        description:
          "Sabe donde esta tu gente cuando mas lo necesitas. Ubica en tiempo real a tu personal en campana u operacion de campo. Mejor coordinacion, respuesta mas rapida y decisiones con datos, no suposiciones.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes de pago)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Soluciones a la medida de tu operacion",
    subheading:
      "Cada cliente tiene necesidades distintas. Cotizamos segun tu sector, escala y nivel de integracion.",
    plans: [
      {
        name: "Ferroviario",
        price: "Cotizar",
        period: "",
        description: "Control de vagones y flota ferroviaria",
        features: [
          "Localizacion satelital en tiempo real",
          "Plataforma personalizada",
          "Monitoreo de vagones y rutas",
          "Reportes operativos automaticos",
        ],
        cta: "Solicitar cotizacion",
        highlighted: false,
      },
      {
        name: "Seguridad C4/C5",
        price: "Cotizar",
        period: "",
        description: "Comunicacion encriptada para centros de comando",
        features: [
          "Radiocomunicacion de alta encriptacion",
          "Integracion con consola sin perder proteccion",
          "Videovigilancia remota",
          "Soporte tecnico especializado",
        ],
        cta: "Hablar con un especialista",
        highlighted: true,
      },
      {
        name: "Gobierno",
        price: "Cotizar",
        period: "",
        description: "Ubicacion de equipos en campo para municipios",
        features: [
          "GPS satelital para personal en campana",
          "Seguimiento en tiempo real",
          "Coordinacion de equipos en territorio",
          "Implementacion y capacitacion",
        ],
        cta: "Agendar demostracion",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Resolvemos tus dudas sobre nuestras soluciones.",
    items: [
      {
        question: "Que sectores atienden?",
        answer:
          "Trabajamos con operadores ferroviarios como Ferromex, centros de comando C4 y C5, y municipios que necesitan ubicar equipos en campo durante campanas u operaciones.",
      },
      {
        question: "Como funciona la localizacion de trenes en tiempo real?",
        answer:
          "Utilizamos GPS satelital conectado a una plataforma personalizada donde puedes ver la ubicacion de cada vagon en tiempo real, sin depender de reportes manuales.",
      },
      {
        question: "La radiocomunicacion mantiene la encriptacion al pasar por consola?",
        answer:
          "Si. Nuestras soluciones integran radiocomunicacion con la mas alta encriptacion, permitiendo pasar por consola sin perder la proteccion de las comunicaciones.",
      },
      {
        question: "Pueden integrar videovigilancia remota?",
        answer:
          "Si. Ofrecemos soluciones de videovigilancia remota que se integran con GPS satelital y comunicacion en una sola plataforma de control.",
      },
      {
        question: "Como solicito una demostracion?",
        answer:
          "Llena el formulario de contacto indicando tu sector e industria. Un especialista te contactara para agendar una demostracion personalizada.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Habla con un especialista",
    subheading:
      "Cuentanos tu operacion y te mostramos como se ve el control total en tu sector.",
    // URL para agendar una cita (Calendly o Google Calendar)
    // Si no tienes, deja el valor vacio: ""
    schedulingUrl: "",
    schedulingCta: "Agendar una llamada",
    form: {
      labels: {
        nombre: "Nombre",
        apellido: "Apellido",
        correo: "Correo",
        telefono: "Telefono",
        industria: "Industria",
        comentarios: "Comentarios",
      },
      placeholders: {
        nombre: "Tu nombre",
        apellido: "Tu apellido",
        correo: "tu@email.com",
        telefono: "Tu numero de telefono",
        industria: "Ej: Ferroviario, Seguridad C4/C5, Gobierno...",
        comentarios: "Cuentanos sobre tu operacion y que necesitas controlar...",
      },
      submitButton: "Solicitar demostracion",
      sendingButton: "Enviando...",
      successMessage:
        "Mensaje enviado correctamente. Revisa tu email.",
      errorMessage:
        "Hubo un error al enviar. Intentalo de nuevo.",
    },
    // Datos de contacto opcionales para mostrar en el footer o sidebar
    email: "contacto@tudominio.com",
    phone: "",
    address: "",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Soluciones", href: "#features" },
      { label: "Sectores", href: "#precios" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Control satelital, videovigilancia y comunicacion segura para operaciones criticas.",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Soluciones", href: "#features" },
      { label: "Sectores", href: "#precios" },
      { label: "Contacto", href: "#contacto" },
    ],
    copyright: "Todos los derechos reservados.",
  },

  // ─────────────────────────────────────────────
  // EMAIL (notificaciones automaticas al recibir un contacto)
  // ─────────────────────────────────────────────
  email: {
    subject: "Recibimos tu solicitud de demostracion",
    teamSignature: "El equipo de Control Satelital Integral",
    // El remitente del email. Debe coincidir con tu dominio verificado en Resend.
    from: "onboarding@resend.dev",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES (referencia para personalizar globals.css)
  // ─────────────────────────────────────────────
  // Estos valores son documentacion. Para cambiar colores en Tailwind v4,
  // edita el archivo src/app/globals.css y modifica las variables CSS.
  colors: {
    primary: "blue-600",    // Color principal (botones, acentos)
    secondary: "gray-900",    // Color de textos principales
    accent: "violet-50",      // Fondos suaves y badges
    accentText: "violet-500", // Textos de acento (titulos, enlaces, iconos)
    background: "white",      // Fondo general
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    // Cambia enabled a true cuando tengas tu cuenta de PayPal lista
    enabled: true,
    // Tu nombre de usuario de PayPal.me
    // Para obtenerlo: ve a paypal.com > Perfil > Configura tu link PayPal.me
    // Ejemplo: si tu link es paypal.me/juanperez, escribe "juanperez"
    paypalMeUsername: "PGutierrezCarrera",
    // Monto sugerido en dolares. Pon 0 para que el comprador elija cuanto pagar.
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO (lo que aparece en Google y redes sociales)
  // ─────────────────────────────────────────────
  metadata: {
    title: "Control Satelital Integral - GPS, Videovigilancia y Comunicacion Segura",
    description:
      "Soluciones integrales de GPS satelital, videovigilancia remota, localizacion ferroviaria y radiocomunicacion encriptada para empresas y gobierno.",
  },
};
