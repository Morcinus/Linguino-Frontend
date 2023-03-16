import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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
