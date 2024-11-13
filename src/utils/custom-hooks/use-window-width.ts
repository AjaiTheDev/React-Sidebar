import { useEffect, useState } from "react";

/**
 * A custom hook that tracks the current window width and determines if the
 * window size corresponds to a medium device (max width of 1022px).
 *
 * @returns {Object} An object containing:
 *   @property {number} width - The current width of the window.
 *   @property {boolean} isMediumDevice - A boolean indicating whether the
 *   window width is less than or equal to 1022 pixels.
 *
 * @example
 * const { width, isMediumDevice } = useWindowWidth();
 */
function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMediumDevice = width <= 1022;

  return { width, isMediumDevice };
}

export default useWindowWidth;
