import { SelectBox } from '../ui';
import { useStatus } from '../hooks';

export const StatusSelect = () => {
  const [status] = useStatus();
  const options = status.map(status => ({
    label: status.name,
    value: status.id,
  }));
  return (
    <SelectBox
      name="Status"
      options={options}
      selectProps={{ searchable: true, placeholder: 'Selecione o status' }}
    />
  );
};
