import { Box } from './Box';
import { SearchField } from './SearchField';
import { Label } from './Label';

type Props = {
  name: string;
};

export const SearchFieldBox = ({ name }: Props) => {
  return (
    <Box style={{ minWidth: '200px', maxWidth: '200px' }}>
      <Label
        variant="title-x-small"
        style={{ marginLeft: '4px', marginBottom: '3px' }}
      >
        {name}
      </Label>
      <SearchField />
    </Box>
  );
};
