export interface ContactData {
    eyebrow: string;
    heading: string;
    description: string;
    urgencyPing: string;
    links: {
        icon: string;
        label: string;
        href: string;
        color: string;
    }[];
    form: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        serviceLabel: string;
        serviceOptions: { value: string; label: string }[];
        budgetLabel: string;
        budgetOptions: { value: string; label: string }[];
        messageLabel: string;
        messagePlaceholder: string;
        cta: string;
        privacyPrefix: string;
        privacyLinkText: string;
    };
}

export const contactData: ContactData = {
    eyebrow: "Contacto",
    heading: "Impulsá tu marca<br /> <span class=\"text-brand-primary\">Te respondemos</span><br /> en menos de 24hs",
    description: "Contanos sobre tu proyecto y un especialista en UI/UX te preparará una propuesta técnica personalizada sin costo",
    urgencyPing: "Agendando para Q2 2026 · Slots limitados",
    links: [
        {
            icon: "whatsapp",
            label: "+54 9 351 500-0000",
            href: "https://wa.me/5493515000000",
            color: "var(--color-semantic-success)",
        },
        {
            icon: "mail",
            label: "hola@tradeweb.com.ar",
            href: "mailto:hola@tradeweb.com.ar",
            color: "var(--color-brand-primary)",
        },
    ],
    form: {
        nameLabel: "Tu nombre completo",
        namePlaceholder: " ",
        emailLabel: "Email laboral",
        emailPlaceholder: " ",
        serviceLabel: "¿Qué servicio buscás?",
        serviceOptions: [
            { value: "landing", label: "Landing Page High-Fi" },
            { value: "ecommerce", label: "Scalable E-Commerce" },
            { value: "hotel", label: "Sistemas de Reserva" },
            { value: "seo", label: "SEO de Autoridad" },
            { value: "ads", label: "Paid Media Strategy" },
            { value: "branding", label: "Identidad Visual Hi-Fi" },
            { value: "otro", label: "Otro / No sé aún" },
        ],
        budgetLabel: "Presupuesto estimado",
        budgetOptions: [
            { value: "500-2000", label: "$500 – $2.000 USD" },
            { value: "2000-5000", label: "$2.000 – $5.000 USD" },
            { value: "5000-10000", label: "$5.000 – $10.000 USD" },
            { value: "gt10k", label: "Más de $10.000 USD" },
            { value: "notsure", label: "No lo tengo definido" },
        ],
        messageLabel: "Contanos sobre tu proyecto",
        messagePlaceholder: "¿Tenés fecha limite? ¿Algún referente de diseño?",
        cta: "Enviar Propuesta",
        privacyPrefix: "Tu información está protegida por nuestra",
        privacyLinkText: "Política de Privacidad",
    },
};
