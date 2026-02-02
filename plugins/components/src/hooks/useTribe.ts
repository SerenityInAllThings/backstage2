import { useState } from "react";

type Tribe = {
    id: string;
    name: string;
}

export const useTribe = (): [Tribe[], (tribe: Tribe[]) => void] => {
    const [tribe, setTribe] = useState<Tribe[]>([{ id: '1', name: 'Tribe 1' }, { id: '2', name: 'Tribe 2' }, { id: '3', name: 'Tribe 3' }]);
    return [tribe, setTribe];
};