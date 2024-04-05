import { useState } from 'react';

function useActive() {
  const [isActive, setIsActive] = useState(false);
  function handleIsActive() {
    setIsActive((prev) => !prev);
  }

  return [isActive, handleIsActive];
}
export default useActive;
