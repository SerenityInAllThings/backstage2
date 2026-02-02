import { SelectBox } from '../ui';
import { useTribe } from '../hooks';

export const TribeSelect = () => {
  const [tribe] = useTribe();
  const options = tribe.map(tribe => ({
    label: tribe.name,
    value: tribe.id,
  }));
  return (
    <SelectBox
      name="Tribe"
      options={options}
      selectProps={{ searchable: true, placeholder: 'Selecione a tribo' }}
    />
  );
};
