import { SelectBox } from '../ui';
import { useType } from '../hooks';

export const TypeSelect = () => {
  const [type] = useType();
  const options = type.map(type => ({
    label: type.name,
    value: type.id,
  }));
  return (
    <SelectBox
      name="Type"
      options={options}
      selectProps={{ searchable: true, placeholder: 'Selecione o tipo' }}
    />
  );
};
