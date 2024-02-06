import icons from "styles/icons";

import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

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
