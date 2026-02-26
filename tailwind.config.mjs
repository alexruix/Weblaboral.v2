/** @type {import('tailwindcss').Config} */

// ─── Design Token Bridge ────────────────────────────────────────────────────
// Maps design-tokens.json to Tailwind. Single source of truth.
// CSS variables are generated in src/styles/tokens.css

const tokens = {
	colors: {
		brand: {
			primary: '#0CF2D0',
			secondary: '#1B6FFF',
			tertiary: '#9B5DE5',
		},
		neutral: {
			0: '#FFFFFF',
			50: '#F5F6FA',
			100: '#E8EAF3',
			200: '#C9CDDE',
			300: '#9FA5BE',
			400: '#6B718E',
			500: '#454A62',
			600: '#2D3049',
			700: '#1E2137',
			800: '#131626',
			900: '#0A0C18',
			1000: '#04050D',
		},
		semantic: {
			success: '#22D35A',
			warning: '#F5A623',
			error: '#FF3B5C',
			info: '#1B6FFF',
		},
		// Semantic aliases that respond to dark/light mode via CSS vars
		surface: {
			bg: 'var(--color-surface-bg)',
			overlay: 'var(--color-surface-overlay)',
			card: 'var(--color-surface-card)',
			border: 'var(--color-surface-border)',
		},
	},

	fontFamily: {
		display: ['Syne', 'sans-serif'],
		body: ['DM Sans', 'sans-serif'],
		mono: ['JetBrains Mono', 'monospace'],
	},

	fontSize: {
		xs: ['0.75rem', { lineHeight: '1rem' }],
		sm: ['0.875rem', { lineHeight: '1.25rem' }],
		base: ['1rem', { lineHeight: '1.5rem' }],
		lg: ['1.125rem', { lineHeight: '1.75rem' }],
		xl: ['1.25rem', { lineHeight: '1.75rem' }],
		'2xl': ['1.5rem', { lineHeight: '1.3' }],
		'3xl': ['1.875rem', { lineHeight: '1.3' }],
		'4xl': ['2.25rem', { lineHeight: '1.2' }],
		'5xl': ['3rem', { lineHeight: '1.1' }],
		'6xl': ['3.75rem', { lineHeight: '1.05' }],
		'7xl': ['4.5rem', { lineHeight: '1.0' }],
		'8xl': ['6rem', { lineHeight: '1.0' }],
	},

	fontWeight: {
		regular: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
	},

	spacing: {
		px: '1px',
		0: '0px',
		1: '4px',
		2: '8px',
		3: '12px',
		4: '16px',
		5: '20px',
		6: '24px',
		7: '28px',
		8: '32px',
		9: '36px',
		10: '40px',
		12: '48px',
		14: '56px',
		16: '64px',
		20: '80px',
		24: '96px',
		28: '112px',
		32: '128px',
		36: '144px',
		40: '160px',
		48: '192px',
		56: '224px',
		64: '256px',
	},

	borderRadius: {
		none: '0px',
		sm: '4px',
		DEFAULT: '8px',
		md: '8px',
		lg: '12px',
		xl: '16px',
		'2xl': '24px',
		full: '9999px',
	},

	boxShadow: {
		none: 'none',
		sm: '0 2px 8px rgba(0,0,0,0.4)',
		md: '0 4px 24px rgba(0,0,0,0.5)',
		lg: '0 8px 48px rgba(0,0,0,0.6)',
		glow: '0 0 32px rgba(12,242,208,0.2), 0 4px 24px rgba(0,0,0,0.5)',
		'glow-blue': '0 0 32px rgba(27,111,255,0.25), 0 4px 24px rgba(0,0,0,0.5)',
		inset: 'inset 0 1px 0 rgba(255,255,255,0.06)',
	},

	transitionTimingFunction: {
		standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
		decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
		accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
		spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
	},

	transitionDuration: {
		instant: '100ms',
		fast: '200ms',
		normal: '350ms',
		slow: '600ms',
		crawl: '1000ms',
	},

	// ── Z-Index Scale — single source of truth for stacking layers
	// Prevents conflicts between Navbar (navbar), Modals (modal), Drawers (drawer), etc.
	zIndex: {
		hide: '-1',
		base: '0',
		raised: '10',
		dropdown: '200',
		sticky: '300',
		overlay: '400',
		navbar: '500',
		drawer: '600',
		modal: '700',
		toast: '800',
		tooltip: '900',
		skip: '9999',
	},
};

export default {
	// ── Dark mode strategy: class-based with localStorage persistence
	darkMode: 'class',

	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.html',
		// ── Watch design-tokens.json so Tailwind rebuilds on token changes
		'./tokens/design-tokens.json',
	],

	theme: {
		extend: {
			colors: tokens.colors,
			fontFamily: tokens.fontFamily,
			fontSize: tokens.fontSize,
			fontWeight: tokens.fontWeight,
			spacing: tokens.spacing,
			borderRadius: tokens.borderRadius,
			boxShadow: tokens.boxShadow,
			transitionTimingFunction: tokens.transitionTimingFunction,
			transitionDuration: tokens.transitionDuration,
			zIndex: tokens.zIndex,
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
			},

			// Custom keyframes for micro-interactions
			keyframes: {
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(24px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 8px rgba(12,242,208,0.3)' },
					'50%': { boxShadow: '0 0 24px rgba(12,242,208,0.6)' },
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},

			animation: {
				'fade-up': 'fade-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'fade-in': 'fade-in 0.4s ease-out both',
				'shimmer': 'shimmer 2.4s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'scan-line': 'scan-line 8s linear infinite',
			},

			// Backdrop for glassmorphism navbar
			backdropBlur: {
				xs: '2px',
				glass: '16px',
			},
		},
	},

	plugins: [],
};
