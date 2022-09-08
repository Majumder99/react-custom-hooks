import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, dependencies) => {
  const fistRenderRef = useRef(true);

  useEffect(() => {
    if (fistRenderRef.current) {
      fistRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
};

export default useUpdateEffect;
