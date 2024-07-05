import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };

  export const handleMinChange = (e, setError, max, setMin) => {
    const value = e.target.value;
    if (value && max && parseInt(value) > parseInt(max)) {
      setError('Min must not be more than Max');
    } else {
      setError('');
    }
    setMin(value);
  };

  export const handleMaxChange = (e, setError, min, setMax) => {
    const value = e.target.value;
    if (value && min && parseInt(value) < parseInt(min)) {
      setError('Max must not be less than Min');
    } else {
      setError('');
    }
    setMax(value);
  };