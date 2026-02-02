import { SelectBox } from '../ui';
import { useServices } from '../hooks';

export const ServicesSelect = () => {
  const [services] = useServices();
  const options = services.map(service => ({
    label: service.alias,
    value: service.alias,
  }));
  return (
    <SelectBox
      name="Services"
      options={options}
      selectProps={{ searchable: true, placeholder: 'Selecione o serviço' }}
    />
  );
};
