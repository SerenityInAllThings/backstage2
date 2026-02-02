import { useState } from 'react';

type Tag = {
  id: string;
  name: string;
  selected: boolean;
};

export const useTags = (): [Tag[], (tags: Tag[]) => void] => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', name: 'Tag 1', selected: false },
    { id: '2', name: 'Tag 2', selected: false },
    { id: '3', name: 'Tag 3', selected: false },
  ]);
  return [tags, setTags];
};
