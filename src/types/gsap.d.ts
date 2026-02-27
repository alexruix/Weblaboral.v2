/**
 * src/types/gsap.d.ts
 *
 * Minimal type augmentations for GSAP loaded via npm.
 * The `gsap` npm package ships its own types.
 * We only need to augment `window` for the Lenis global instance.
 */
import type Lenis from 'lenis';

declare global {
    interface Window {
        __lenis?: Lenis;
    }
}

export { };