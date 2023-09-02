import { useRef, useEffect } from 'react';
/*When a component is "mounted," it means that it has been inserted into the DOM and is currently being displayed. */

function useMounted() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

export default useMounted;
