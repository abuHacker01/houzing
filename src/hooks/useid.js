import { useId } from "react";

const useUnicid = () => {
  const id = useId();
  return useId;
};

export default useUnicid;
