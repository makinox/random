'use client';

import { serializeValue, unSerializeValue } from '@/utils';
import { useEffect, useState } from 'react';

export default function useStateWithStorage<T>(key: string, defaultValue: T) {
  const initialValue = isWindowAvailable() ? unSerializeValue(window.localStorage.getItem(key)) : defaultValue;

  const [storage, setStorage] = useState<T>(initialValue);

  // Sync local storage
  useEffect(() => {
    if (!isWindowAvailable()) return;
    window.localStorage.setItem(key, serializeValue(storage));
  }, [key, storage]);

  return { storage, setStorage };
}

const isWindowAvailable = () => typeof window !== 'undefined';
