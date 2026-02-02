import { useState } from 'react';

type Type = {
  id: string;
  name: string;
};

export const useType = (): [Type[], (type: Type[]) => void] => {
  const [type, setType] = useState<Type[]>([
    { id: '1', name: 'Type 1' },
    { id: '2', name: 'Type 2' },
    { id: '3', name: 'Type 3' },
  ]);
  return [type, setType];
};
