import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export interface ICheckList {
  items: Array<string>;
}

const CheckList: React.FC<ICheckList> = ({ items }) => {
  return (
    <FormGroup>
      {items.map((item: string) => {
        return (
          <FormControlLabel control={<Checkbox />} label={item} key={item} />
        );
      })}
    </FormGroup>
  );
};

export default CheckList;
