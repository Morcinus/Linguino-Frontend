import icons from "styles/icons";

import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

export interface ISearchBar {
  title: string;
  value: string;
  onChange: (text: string) => void;
  onSearchClick: (text: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({
  title,
  value,
  onChange,
  onSearchClick,
}) => {
  return (
    <Box>
      <InputLabel id="text">{title}</InputLabel>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => onSearchClick(value)}>
                <Icon>{icons.search}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
