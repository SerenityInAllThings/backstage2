import {
  Select as SelectComponent,
  SelectProps as SelectComponentProps,
} from '@backstage/ui';

type Option = {
  label: string;
  value: string;
};

export type Props = SelectComponentProps<'single' | 'multiple'> & {
  options: Option[] | undefined;
};

export const Select = ({ options, ...props }: Props) => {
  return <SelectComponent options={options} {...props} />;
};
