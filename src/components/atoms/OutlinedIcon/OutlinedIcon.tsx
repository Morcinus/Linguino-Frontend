import { ReactNode } from "react";

import { IconProps } from "@mui/material";
import Icon from "@mui/material/Icon";

export interface IOutlinedIcon {
  children: ReactNode;
}

const OutlinedIcon: React.FC<IOutlinedIcon & IconProps> = (props) => {
  return (
    <Icon baseClassName="material-icons-outlined" {...props}>
      {props.children}
    </Icon>
  );
};

export default OutlinedIcon;
