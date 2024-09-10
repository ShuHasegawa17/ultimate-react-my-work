import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler, listenCaptureng = true) => {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener('click', handleClick, listenCaptureng);

    return () =>
      document.removeEventListener('click', handleClick, listenCaptureng);
  }, [handler, listenCaptureng]);
  return ref;
};
