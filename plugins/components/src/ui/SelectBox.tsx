import { Box } from './Box';
import { Select } from './Select';
import { Label } from './Label';
import { SelectProps as SelectComponentProps } from '@backstage/ui';

type Props = {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  selectProps?: SelectComponentProps<'single' | 'multiple'>;
};

export const SelectBox = ({ name, options, selectProps }: Props) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
      }}
    >
      <Label
        variant="title-x-small"
        style={{
          marginLeft: '4px',
          marginBottom: '3px',
        }}
      >
        {name}
      </Label>
      <Select options={options} {...selectProps} />
    </Box>
  );
};
