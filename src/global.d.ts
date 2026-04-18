declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'smooothy' {
  export function damp(current: number, target: number, factor: number, deltaTime: number): number;
  
  interface CoreConfig {
    infinite?: boolean;
    snap?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    dragSensitivity?: number;
    lerpFactor?: number;
    scrollSensitivity?: number;
    snapStrength?: number;
    speedDecay?: number;
    bounceLimit?: number;
    scrollInput?: boolean;
    setOffset?: (params: any) => number;
    virtualScroll?: {
      mouseMultiplier?: number;
      touchMultiplier?: number;
      firefoxMultiplier?: number;
      useKeyboard?: boolean;
      passive?: boolean;
    };
    onSlideChange?: (currentSlide: number, previousSlide: number) => void;
    onResize?: (instance: any) => void;
    onUpdate?: (instance: any) => void;
  }

  export default class Core {
    constructor(wrapper: HTMLElement, config?: CoreConfig);
    update(): void;
    destroy(): void;
    init(): void;
    kill(): void;
    goToNext(): void;
    goToPrev(): void;
    goToIndex(n: number): void;
    currentSlide: number;
    progress: number;
    target: number;
    current: number;
    deltaTime: number;
    paused: boolean;
    snap: boolean;
    isVisible: boolean;
    viewport: {
      itemWidth: number;
      wrapperWidth: number;
      totalWidth: number;
      itemHeight: number;
      wrapperHeight: number;
      totalHeight: number;
      vertical: boolean;
    };
  }
}
