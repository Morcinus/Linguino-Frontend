import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Paper, Typography } from "@mui/material";

export interface IStudyExpansionBar {
  onClick: () => void;
  open: boolean;
}

const StudyExpansionBar: React.FC<IStudyExpansionBar> = ({ onClick, open }) => {
  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: 0, borderRight: 0, borderLeft: 0, borderBottom: 0 }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          color="secondary"
          sx={{ color: "#808080", textTransform: "none", my: 2.5 }}
          onClick={onClick}
        >
          <Typography variant="h5">Vysvětlení gramatiky</Typography>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
    </Paper>
  );
};

export default StudyExpansionBar;
