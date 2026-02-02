import { Text, TextProps, TextVariants } from '@backstage/ui';

type Props = Omit<TextProps, 'variant'> & {
  variant: TextVariants;
  children: React.ReactNode;
};

export const Label = ({ children, variant, ...props }: Props) => {
  return (
    // @ts-ignore
    <Text variant={variant} {...props}>
      {children}
    </Text>
  );
};
