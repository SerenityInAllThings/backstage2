import { useState } from "react";

type Status = {
    id: string;
    name: string;
}

export const useStatus = (): [Status[], (status: Status[]) => void] => {
    const [status, setStatus] = useState<Status[]>([{ id: '1', name: 'Status 1' }, { id: '2', name: 'Status 2' }, { id: '3', name: 'Status 3' }]);
    return [status, setStatus];
};