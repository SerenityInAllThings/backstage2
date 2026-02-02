import {
  Box as BoxComponent,
  BoxProps as BoxComponentProps,
} from '@backstage/ui';

type Props = BoxComponentProps & {};

export const Box = ({ children, ...props }: Props) => {
  return (
    <BoxComponent
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        gap: '10px',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </BoxComponent>
  );
};
