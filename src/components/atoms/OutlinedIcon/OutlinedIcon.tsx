import { ReactNode } from "react";

import { Icon, IconProps } from "@mui/material";

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
