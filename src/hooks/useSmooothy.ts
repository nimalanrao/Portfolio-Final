import { useEffect, useRef, useCallback } from "react";
import Core from "smooothy";

interface UseSmooothyOptions {
  infinite?: boolean;
  snap?: boolean;
  variableWidth?: boolean;
  vertical?: boolean;
  dragSensitivity?: number;
  lerpFactor?: number;
  scrollInput?: boolean;
  scrollSensitivity?: number;
  snapStrength?: number;
  speedDecay?: number;
  onSlideChange?: (current: number, previous: number) => void;
  onUpdate?: (instance: any) => void;
}

export function useSmooothy<T extends HTMLElement>(options: UseSmooothyOptions = {}) {
  const wrapperRef = useRef<T>(null);
  const sliderRef = useRef<Core | null>(null);
  const rafRef = useRef<number>(0);

  const init = useCallback(() => {
    if (!wrapperRef.current || sliderRef.current) return;

    sliderRef.current = new Core(wrapperRef.current, {
      infinite: options.infinite ?? true,
      snap: options.snap ?? true,
      variableWidth: options.variableWidth ?? false,
      vertical: options.vertical ?? false,
      dragSensitivity: options.dragSensitivity ?? 0.005,
      lerpFactor: options.lerpFactor ?? 0.3,
      scrollInput: options.scrollInput ?? false,
      scrollSensitivity: options.scrollSensitivity ?? 1,
      snapStrength: options.snapStrength ?? 0.1,
      speedDecay: options.speedDecay ?? 0.85,
      onSlideChange: options.onSlideChange,
      onUpdate: options.onUpdate,
    });

    function animate() {
      if (sliderRef.current) {
        sliderRef.current.update();
        rafRef.current = requestAnimationFrame(animate);
      }
    }
    animate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(init, 100);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (sliderRef.current) {
        sliderRef.current.destroy();
        sliderRef.current = null;
      }
    };
  }, [init]);

  return {
    wrapperRef,
    slider: sliderRef,
    goToNext: () => sliderRef.current?.goToNext(),
    goToPrev: () => sliderRef.current?.goToPrev(),
    goToIndex: (n: number) => sliderRef.current?.goToIndex(n),
  };
}
