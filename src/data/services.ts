import type { BentoItem } from "@organisms/BentoGrid.astro";

/**
 * SERVICES DATA — High Fidelity Fusion
 * Fusiona la claridad de Tradeweb con la estética High-Tech de la nueva plataforma.
 * Total: 6 Cards (Balance perfecto para un grid de 3 columnas)
 */
export const SERVICES: BentoItem[] = [
    {
        id: "landing-pages",
        anchorId: "servicios-web",
        title: "Conversion Engineering",
        description: "Landing Pages de alta fidelidad diseñadas para transformar visitantes en clientes. Fusionamos estrategia de producto, diseño persuasivo y copy orientado a ventas.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        tag: "Diseño Web",
        stat: { value: "+340%", label: "Conversión promedio" },
        accent: "primary", // Mapeado de #0CF2D0
        bento: "md:col-span-2 md:row-span-2", // Card Líder: Tu servicio más fuerte
        href: "/servicios/landing-pages",
        ctaText: "Ver ingeniería →"
    },
    {
        id: "ecommerce",
        title: "Scalable E-Commerce",
        description: "Ecosistemas de venta online listos para escalar. Integración total de pagos, logística avanzada y gestión de stock automatizada.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
        tag: "E-Commerce",
        accent: "secondary", // Mapeado de #1B6FFF
        bento: "md:col-span-1 md:row-span-1",
        href: "/servicios/ecommerce"
    },
    {
        id: "seo-estrategico",
        anchorId: "servicios-marketing",
        title: "SEO de Autoridad",
        description: "Posicionamiento orgánico moderno. Auditorías técnicas y contenido semántico diseñado para dominar las búsquedas de alta intención.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        tag: "Growth",
        stat: { value: "Top 3", label: "Posicionamiento medio" },
        accent: "tertiary", // Mapeado de #9B5DE5
        bento: "md:col-span-1 md:row-span-1",
        href: "/servicios/seo"
    },
    {
        id: "branding-visual",
        anchorId: "servicios-branding",
        title: "Identidad Visual Hi-Fi",
        description: "Sistemas de marca que proyectan autoridad. Logo, tipografía y manuales de identidad que multiplican el valor percibido de tu negocio.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/></svg>`,
        tag: "Branding",
        stat: { value: "Premium", label: "Percepción de marca" },
        accent: "secondary",
        bento: "md:col-span-1 md:row-span-2", // Card Vertical: Para romper la monotonía del grid
        href: "/servicios/branding",
        ctaText: "Ver sistema de marca →"
    },
    {
        id: "ads-performance",
        title: "Paid Media Strategy",
        description: "Campañas en Google y Meta optimizadas con rigor técnico. Cada centavo invertido tiene un tracking de retorno directo y medible.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
        tag: "Marketing",
        accent: "primary",
        bento: "md:col-span-1 md:row-span-1",
        href: "/servicios/ads"
    },
    {
        id: "booking-engines",
        title: "Sistemas de Reserva",
        description: "Motores de reserva directa para hoteles y servicios. Experiencia inmersiva que elimina intermediarios y maximiza el revenue por cliente.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        tag: "Verticales",
        accent: "tertiary",
        bento: "md:col-span-1 md:row-span-1",
        href: "/servicios/hoteles"
    }
];