import { useState } from "react"


function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flip = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flip];
}

export default useFlip;