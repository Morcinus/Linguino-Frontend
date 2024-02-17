import { IconProps } from "@mui/material";
import Icon from "@mui/material/Icon";

export interface IIconContainer {
  name: string;
}

const IconContainer: React.FC<IIconContainer & IconProps> = (props) => {
  let variant: "OUTLINED" | "FILLED" = "FILLED";
  if (props.name.endsWith("_outlined")) {
    variant = "OUTLINED";
  }

  const cutOutlined = (str: string) => str.slice(0, -9);

  return (
    <Icon
      baseClassName={
        variant === "OUTLINED" ? "material-icons-outlined" : undefined
      }
      {...props}
    >
      {variant === "OUTLINED" ? cutOutlined(props.name) : props.name}
    </Icon>
  );
};

export default IconContainer;
