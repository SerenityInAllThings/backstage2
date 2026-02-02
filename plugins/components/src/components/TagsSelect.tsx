import { SelectBox } from '../ui';
import { useTags } from '../hooks';

export const TagsSelect = () => {
  const [tags] = useTags();
  const options = tags.map(tag => ({
    label: tag.name,
    value: tag.id,
    selected: tag.selected,
  }));
  return (
    <SelectBox
      name="Tags"
      options={options}
      selectProps={{
        selectionMode: 'multiple',
        searchable: true,
        placeholder: 'Selecione as tags',
      }}
    />
  );
};
