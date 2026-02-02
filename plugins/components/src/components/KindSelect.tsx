import { SelectBox } from '../ui';
import { useKind } from '../hooks';

export const KindSelect = () => {
  const [kind] = useKind();
  const options = kind.map(kind => ({
    label: kind.name,
    value: kind.id,
  }));
  return (
    <SelectBox
      name="Kind"
      options={options}
      selectProps={{ searchable: true, placeholder: 'Selecione o kind' }}
    />
  );
};
