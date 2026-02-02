import { useState } from "react";

type Service = {
    alias: string;
}

export const useServices = (): [Service[], (services: Service[]) => void] => {
    const [services, setServices] = useState<Service[]>([{ alias: 'service1' }, { alias: 'service2' }, { alias: 'service3' }]);
    return [services, setServices];
};