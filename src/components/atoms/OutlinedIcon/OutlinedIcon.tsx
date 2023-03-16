import { ReactNode } from "react";

import { Icon } from "@mui/material";

export interface IOutlinedIcon {
  children: ReactNode;
}

const OutlinedIcon: React.FC<IOutlinedIcon> = ({ children }) => {
  return <Icon baseClassName="material-icons-outlined">{children}</Icon>;
};

export default OutlinedIcon;
