import { MutableRefObject, useEffect } from 'react';

function useOnClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        // eslint-disable-next-line no-useless-return
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
