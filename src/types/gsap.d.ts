/**
 * src/types/gsap.d.ts
 * Strict type augmentations for GSAP 3 and Lenis loaded via CDN.
 * Avoids any/unknown usage throughout the codebase.
 */

// ── Minimal Lenis types (only what we use) ──────────────────────────────────
export interface LenisScrollEvent {
    scroll: number;
    limit: number;
    velocity: number;
    direction: 1 | -1;
    progress: number;
}

export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    orientation?: 'vertical' | 'horizontal';
}

export interface LenisInstance {
    on(event: 'scroll', cb: (e: LenisScrollEvent) => void): void;
    off(event: 'scroll', cb: (e: LenisScrollEvent) => void): void;
    raf(time: number): void;
    scrollTo(
        target: Element | string | number,
        opts?: {
            offset?: number;
            duration?: number;
            easing?: (t: number) => number;
            immediate?: boolean;
            lock?: boolean;
        }
    ): void;
    stop(): void;
    start(): void;
    destroy(): void;
    readonly scroll: number;
    readonly limit: number;
    readonly velocity: number;
    readonly progress: number;
}

export interface LenisConstructor {
    new(opts?: LenisOptions): LenisInstance;
}

// ── Minimal ScrollTrigger types ──────────────────────────────────────────────
export interface ScrollTriggerInstance {
    kill(revert?: boolean): void;
    enable(): void;
    disable(): void;
    refresh(): void;
    readonly progress: number;
    readonly isActive: boolean;
}

export interface ScrollTriggerStatic {
    create(vars: ScrollTriggerVars): ScrollTriggerInstance;
    refresh(safe?: boolean): void;
    update(): void;
    getAll(): ScrollTriggerInstance[];
    killAll(revert?: boolean): void;
    addEventListener(type: string, callback: () => void): void;
    removeEventListener(type: string, callback: () => void): void;
}

export interface ScrollTriggerVars {
    trigger?: Element | string;
    start?: string | number | ((self: ScrollTriggerInstance) => string | number);
    end?: string | number | ((self: ScrollTriggerInstance) => string | number);
    scrub?: boolean | number;
    pin?: boolean | Element | string;
    once?: boolean;
    markers?: boolean;
    onEnter?: (self: ScrollTriggerInstance) => void;
    onLeave?: (self: ScrollTriggerInstance) => void;
    onEnterBack?: (self: ScrollTriggerInstance) => void;
    onLeaveBack?: (self: ScrollTriggerInstance) => void;
    onUpdate?: (self: ScrollTriggerInstance) => void;
    onToggle?: (self: ScrollTriggerInstance) => void;
    animation?: GSAPAnimation;
    toggleClass?: string | { targets: Element | string; className: string };
    invalidateOnRefresh?: boolean;
}

// ── Minimal GSAP types ───────────────────────────────────────────────────────
export interface GSAPAnimation {
    kill(): this;
    pause(): this;
    play(): this;
    restart(): this;
    reverse(): this;
    resume(): this;
    seek(time: number | string): this;
    progress(value?: number): this | number;
    readonly totalDuration: number;
    readonly time: number;
}

export interface GSAPTweenVars {
    duration?: number;
    delay?: number;
    ease?: string | ((t: number) => number);
    stagger?: number | GSAPStaggerVars;
    opacity?: number;
    x?: number | string;
    y?: number | string;
    xPercent?: number;
    yPercent?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    skewX?: number;
    skewY?: number;
    transformOrigin?: string;
    transformPerspective?: number;
    width?: number | string;
    height?: number | string;
    left?: number | string;
    top?: number | string;
    boxShadow?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    clipPath?: string;
    filter?: string;
    scrollTrigger?: ScrollTriggerVars;
    onComplete?: () => void;
    onStart?: () => void;
    onUpdate?: () => void;
    immediateRender?: boolean;
    overwrite?: boolean | 'auto';
    paused?: boolean;
    id?: string;
    // Allow any CSS property or GSAP special prop
    [key: string]: unknown;
}

export interface GSAPStaggerVars {
    amount?: number;
    each?: number;
    from?: 'start' | 'center' | 'end' | 'random' | number;
    grid?: [number, number] | 'auto';
    axis?: 'x' | 'y';
    ease?: string;
}

export interface GSAPTimeline extends GSAPAnimation {
    to(targets: GSAPTarget, vars: GSAPTweenVars, position?: string | number): this;
    from(targets: GSAPTarget, vars: GSAPTweenVars, position?: string | number): this;
    fromTo(targets: GSAPTarget, fromVars: GSAPTweenVars, toVars: GSAPTweenVars, position?: string | number): this;
    add(child: GSAPAnimation | (() => void), position?: string | number): this;
    set(targets: GSAPTarget, vars: GSAPTweenVars, position?: string | number): this;
    call(callback: () => void, params?: unknown[], position?: string | number): this;
    clear(labels?: boolean): this;
    getChildren(): GSAPAnimation[];
}

export type GSAPTarget =
    | Element
    | Element[]
    | NodeList
    | string
    | null
    | undefined
    | GSAPTarget[];

export interface GSAPStatic {
    registerPlugin(...args: unknown[]): void;
    to(targets: GSAPTarget, vars: GSAPTweenVars): GSAPAnimation;
    from(targets: GSAPTarget, vars: GSAPTweenVars): GSAPAnimation;
    fromTo(targets: GSAPTarget, fromVars: GSAPTweenVars, toVars: GSAPTweenVars): GSAPAnimation;
    set(targets: GSAPTarget, vars: GSAPTweenVars): GSAPAnimation;
    timeline(vars?: GSAPTweenVars): GSAPTimeline;
    killTweensOf(targets: GSAPTarget): void;
    getProperty(target: Element, property: string, unit?: string): string | number;
    ticker: {
        add(callback: (time: number, deltaTime: number, frame: number) => void): void;
        remove(callback: (time: number, deltaTime: number, frame: number) => void): void;
        lagSmoothing(threshold: number, adjustedLag?: number): void;
        fps(fps: number): void;
    };
    defaults(vars: GSAPTweenVars): void;
    utils: {
        toArray<T extends Element = Element>(targets: GSAPTarget): T[];
        selector(scope: Element | string): <T extends Element = Element>(target: string) => T[];
        clamp(min: number, max: number, value: number): number;
        mapRange(inMin: number, inMax: number, outMin: number, outMax: number, value?: number): number;
        interpolate(start: number, end: number, progress: number): number;
    };
    matchMedia(queries: Record<string, (context: { conditions: Record<string, boolean> }) => void>): {
        revert(): void;
    };
    context(func: () => void, scope?: Element | string): {
        revert(): void;
        kill(): void;
        add(func: () => void): void;
    };
}

// ── Window augmentation ──────────────────────────────────────────────────────
declare global {
    interface Window {
        gsap: GSAPStatic;
        ScrollTrigger: ScrollTriggerStatic;
        Lenis: LenisConstructor;
        lenis: LenisInstance;
    }
}

export { };