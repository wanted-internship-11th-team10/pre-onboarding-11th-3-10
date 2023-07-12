import { useState } from 'react';

type InputEvent = {
  target: { value: string };
};
export function useInput(initValue: string) {
  const [value, setVale] = useState(initValue || '');

  const handleChange = (event: InputEvent) => {
    setVale(event.target.value);
  };

  const reset = () => {
    setVale(initValue);
  };

  return { value, onChange: handleChange, reset };
}
