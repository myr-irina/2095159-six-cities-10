import { MutableRefObject, useEffect } from 'react';

function useOnClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (!ref.current || ref.current.contains(event.target as HTMLBodyElement)) {
        return;
      }
      handler();
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref]);
}
export default useOnClickOutside;
