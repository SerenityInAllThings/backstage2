import { Content, Header, Page } from '@backstage/core-components';

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const BasePage = ({ title, subtitle, children }: Props) => {
  return (
    <Page themeId="tool">
      <Header title={title} subtitle={subtitle}></Header>
      <Content>{children}</Content>
    </Page>
  );
};
