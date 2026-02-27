/**
 * src/data/site.ts — Centralized data for the homepage
 *
 * Single source of truth for all page content.
 * Components import from here instead of hardcoding in templates.
 */

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface NavDropdown {
    label: string;
    items: NavLink[];
}

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: string;
    tag: string;
    href: string;
    ctaText: string;
    accent: string;
    bento: string;
    stat?: { value: string; label: string };
    anchorId?: string;
    featured?: boolean;
}

export interface PortfolioProject {
    id: string;
    title: string;
    category: string;
    year: string;
    accent: string;
    bg: string;
    desc: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    accent: string;
    result?: { value: string; label: string };
    featured?: boolean;
}

export interface StatItem {
    value: number;
    suffix: string;
    label: string;
    accent: string;
    decimals?: number;
}

export interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
    badge?: string;
}

export interface FooterColumn {
    heading: string;
    links: FooterLink[];
}

// ─── Navigation ────────────────────────────────────────────────────────────────

export const navLinks: (NavLink | NavDropdown)[] = [
    {
        label: 'Servicios',
        items: [
            { label: 'Diseño Web', href: '#servicios-web' },
            { label: 'Marketing Digital', href: '#servicios-marketing' },
            { label: 'Branding', href: '#servicios-branding' },
        ],
    },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'La Agencia', href: '#la-agencia' },
    { label: 'Contacto', href: '#contacto' },
];

// ─── Services ──────────────────────────────────────────────────────────────────

export const services: ServiceData[] = [
    // — Web Design (high-revenue → featured)
    {
        id: 'landing',
        title: 'Landing Pages',
        description: 'Páginas de alta conversión diseñadas para transformar visitantes en clientes. Estrategia, diseño y copy integrados.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        tag: 'Diseño Web',
        stat: { value: '+340%', label: 'Conversión promedio de nuestros clientes' },
        href: '/servicios/landing-pages',
        ctaText: 'Ver servicio →',
        accent: '#0CF2D0',
        bento: 'col-span-1 md:col-span-2',
        anchorId: 'servicios-web',
        featured: true,
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce',
        description: 'Tiendas online que venden las 24hs. Integramos medios de pago, logística y gestión de stock.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
        tag: 'Diseño Web',
        href: '/servicios/ecommerce',
        ctaText: 'Explorar →',
        accent: '#1B6FFF',
        bento: 'col-span-1',
        featured: true,
    },
    {
        id: 'hoteles',
        title: 'Sitios para Hoteles',
        description: 'Motor de reservas directo, galería inmersiva y posicionamiento en Google Hotel Ads.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        tag: 'Diseño Web',
        href: '/servicios/hoteles',
        ctaText: 'Explorar →',
        accent: '#9B5DE5',
        bento: 'col-span-1',
    },
    // — Marketing
    {
        id: 'seo',
        title: 'SEO Estratégico',
        description: 'Posicionamiento orgánico moderno: auditorías técnicas, contenido semántico y link building con datos reales.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
        tag: 'Marketing',
        stat: { value: 'Top 3', label: 'Posición media en Google' },
        href: '/servicios/seo',
        ctaText: 'Ver resultados →',
        accent: '#0CF2D0',
        bento: 'col-span-1',
        anchorId: 'servicios-marketing',
    },
    {
        id: 'ads',
        title: 'Google & Meta Ads',
        description: 'Campañas de alto rendimiento con optimización diaria. Cada peso invertido tiene tracking y retorno medible.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
        tag: 'Marketing',
        href: '/servicios/ads',
        ctaText: 'Explorar →',
        accent: '#1B6FFF',
        bento: 'col-span-1 md:col-span-2',
    },
    // — Branding
    {
        id: 'branding',
        title: 'Identidad Visual',
        description: 'Logo, paleta, tipografía y manual de marca. Una identidad coherente multiplica el valor percibido de tu negocio.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
        tag: 'Branding',
        stat: { value: '12 años', label: 'Creando marcas memorables' },
        href: '/servicios/branding',
        ctaText: 'Ver proceso →',
        accent: '#9B5DE5',
        bento: 'col-span-1 md:col-span-2',
        anchorId: 'servicios-branding',
    },
];

// ─── Portfolio ─────────────────────────────────────────────────────────────────

export const portfolio: PortfolioProject[] = [
    {
        id: 'p1',
        title: 'Nómade Hoteles',
        category: 'Diseño Web · Hoteles',
        year: '2024',
        accent: '#0CF2D0',
        bg: '#041A18',
        desc: 'Rediseño completo con motor de reservas directo y +60% conversión orgánica.',
    },
    {
        id: 'p2',
        title: 'Malbec Roots Winery',
        category: 'E-Commerce · Branding',
        year: '2024',
        accent: '#9B5DE5',
        bg: '#110A1E',
        desc: 'Tienda online B2C y B2B para exportación de vino a 12 países.',
    },
    {
        id: 'p3',
        title: 'FitPlan Pro',
        category: 'Landing Page · Meta Ads',
        year: '2023',
        accent: '#F5A623',
        bg: '#1A1000',
        desc: 'Landing + funnel de ventas con ROAS 4.2× en 60 días de campaña.',
    },
    {
        id: 'p4',
        title: 'Clínica Belgrano',
        category: 'Diseño Web · SEO',
        year: '2023',
        accent: '#22D35A',
        bg: '#051510',
        desc: 'De página 4 a Top 3 de Google en 3 meses para keywords clave.',
    },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
    {
        quote: 'En 45 días lanzamos la tienda, y en el primer mes superamos las ventas físicas. TradeWeb entiende el negocio antes que el diseño.',
        author: 'Sofía Carranza',
        role: 'Fundadora',
        company: 'Malbec Roots Winery',
        rating: 5,
        accent: '#9B5DE5',
        result: { value: '+320%', label: 'ventas online en 90 días' },
        featured: true,
    },
    {
        quote: 'Duplicamos las reservas directas del hotel en una temporada. El diseño genera confianza instantánea en el viajero internacional.',
        author: 'Marcos Delgado',
        role: 'Director de Marketing',
        company: 'Nómade Hoteles',
        rating: 5,
        accent: '#1B6FFF',
    },
    {
        quote: 'Teníamos una web vieja y nadie nos encontraba. Ahora somos el primer resultado de Google para nuestra especialidad en Córdoba.',
        author: 'Dra. Cecilia Rojas',
        role: 'Directora Médica',
        company: 'Clínica Belgrano',
        rating: 5,
        accent: '#0CF2D0',
        result: { value: 'Posición #1', label: 'Google Córdoba' },
        featured: true,
    },
    {
        quote: 'El equipo propuso ideas que nosotros jamás habríamos pensado. La marca quedó coherente en todos los canales por primera vez.',
        author: 'Juan Mercado',
        role: 'CEO',
        company: 'FitPlan Pro',
        rating: 5,
        accent: '#9B5DE5',
    },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
    { value: 12, suffix: '', label: 'años en el mercado', accent: '#0CF2D0' },
    { value: 280, suffix: '+', label: 'proyectos entregados', accent: '#0CF2D0' },
    { value: 98, suffix: '%', label: 'clientes que recomiendan', accent: '#0CF2D0' },
    { value: 4.8, suffix: '× ROI', label: 'retorno promedio en Ads', accent: '#0CF2D0', decimals: 1 },
];

// ─── Footer ────────────────────────────────────────────────────────────────────

export const footerColumns: FooterColumn[] = [
    {
        heading: 'Servicios',
        links: [
            { label: 'Landing Pages', href: '/servicios/landing-pages' },
            { label: 'E-Commerce', href: '/servicios/ecommerce' },
            { label: 'Sitios para Hoteles', href: '/servicios/hoteles' },
            { label: 'SEO Estratégico', href: '/servicios/seo' },
            { label: 'Google & Meta Ads', href: '/servicios/ads' },
            { label: 'Identidad Visual', href: '/servicios/branding' },
        ],
    },
    {
        heading: 'Empresa',
        links: [
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Blog', href: '/blog' },
            { label: 'Testimonios', href: '#testimonios' },
        ],
    },
    {
        heading: 'Contacto',
        links: [
            { label: 'WhatsApp', href: 'https://wa.me/5493515000000', external: true, badge: 'Rápido' },
            { label: 'Email', href: 'mailto:hola@tradeweb.com.ar', external: true },
            { label: 'Presupuesto', href: '#contacto' },
        ],
    },
];
