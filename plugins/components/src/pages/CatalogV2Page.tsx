import { BasePage, Box } from '../ui';
import {
  ServicesSelect,
  TribeSelect,
  TypeSelect,
  StatusSelect,
  KindSelect,
  NameSearchFieldBox,
  TagsSelect,
} from '../components';

export const CatalogV2Page = () => {
  return (
    <BasePage
      title="Catálogo V2"
      subtitle="Aqui é possível filtrar os componentes por serviço, tribo, tipo, status e kind."
    >
      <Box>
        <ServicesSelect />
        <TribeSelect />
        <TypeSelect />
        <StatusSelect />
        <NameSearchFieldBox />
        <KindSelect />
        <TagsSelect />
      </Box>
    </BasePage>
  );
};
