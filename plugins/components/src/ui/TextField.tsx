import {
  TextField as TextFieldComponent,
  TextFieldProps as TextFieldComponentProps,
} from '@backstage/ui';

type Props = TextFieldComponentProps & {};

export const TextField = ({ ...props }: Props) => {
  return (
    <TextFieldComponent style={{ width: '100%', ...props.style }} {...props} />
  );
};
