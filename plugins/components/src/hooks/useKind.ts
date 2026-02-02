import { useState } from "react";

type Kind = {
    id: string;
    name: string;
}

export const useKind = (): [Kind[], (kind: Kind[]) => void] => {
    const [kind, setKind] = useState<Kind[]>([{ id: '1', name: 'Kind 1' }, { id: '2', name: 'Kind 2' }, { id: '3', name: 'Kind 3' }]);
    return [kind, setKind];
};