import { TextField } from './TextField';
import SearchIcon from '@material-ui/icons/Search';

type Props = {};

export const SearchField = ({ ...props }: Props) => {
  return <TextField {...props} placeholder="Pesquisar" icon={<SearchIcon />} />;
};
