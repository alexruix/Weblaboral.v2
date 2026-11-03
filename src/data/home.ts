export interface HomeData {
    hero: {
        tagline: string;
        title: string;
        subtitle: string;
        actions: {
            primary: { label: string; href: string };
            secondary: { label: string; href: string };
        };
        scrollIndicator: string;
    };
    trustTicker: {
        eyebrow: string;
    };
    bentoGrid: {
        eyebrow: string;
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
    };
    portfolio: {
        eyebrow: string;
        title: string;
        ctaText: string;
        ctaHref: string;
        indicatorFormat: (current: number, total: number) => { currentStr: string; totalStr: string };
    };
    stats: {
        heading: string;
    };
    testimonials: {
        eyebrow: string;
        title: string;
    };
}

export const homeData: HomeData = {
    hero: {
        tagline: '<span class="relative flex w-2 h-2 mr-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60"></span><span class="relative inline-flex rounded-full w-2 h-2 bg-brand-primary"></span></span> Córdoba, Argentina · +280 proyectos',
        title: 'Elevamos el estándar digital de tu marca con <span class="text-gradient">diseño inteligente</span>.',
        subtitle: 'Soluciones web de alto rendimiento en Argentina. Integramos IA y diseño de vanguardia para transformar tu visión tradicional en una plataforma de nueva generación.',
        actions: {
            primary: { label: 'Solicitar presupuesto gratis', href: '#contacto' },
            secondary: { label: 'Ver nuestros servicios', href: '#servicios' },
        },
        scrollIndicator: 'Scroll para explorar',
    },
    trustTicker: {
        eyebrow: 'Empresas que confían en TradeWeb',
    },
    bentoGrid: {
        eyebrow: 'Servicios',
        title: 'Todo lo que tu<br/>marca digital necesita.',
        description: 'Integramos diseño, tecnología y estrategia de marketing para que cada proyecto sea una inversión con retorno medible.',
        ctaLabel: 'Hablar con un especialista',
        ctaHref: '#contacto',
    },
    portfolio: {
        eyebrow: 'Portfolio',
        title: 'Trabajo que<br/>habla por sí solo.',
        ctaText: 'Ver todos los proyectos',
        ctaHref: '/portfolio',
        indicatorFormat: (current: number, total: number) => ({
            currentStr: current < 10 ? `0${current}` : `${current}`,
            totalStr: total < 10 ? `0${total}` : `${total}`,
        }),
    },
    stats: {
        heading: 'La Agencia en números',
    },
    testimonials: {
        eyebrow: 'Testimonios',
        title: 'Lo que dicen quienes<br/>ya dieron el salto.',
    },
};
