import React, { ComponentProps, ElementType, useState } from "react";

import { Box } from "@mui/system";

import Drawer from "../Drawer/Drawer";

export interface IDrawerController {
  onDrawerOpen: () => void;
}

export interface IDrawerContainer {
  child: {
    component: ElementType<IDrawerController>;
    props?: ComponentProps<ElementType>;
  };
}

const DrawerContainer: React.FC<IDrawerContainer> = ({ child }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ChildComponent = child.component;

  return (
    <Box sx={{ display: "flex" }}>
      <ChildComponent
        {...child.props}
        onDrawerOpen={() => setDrawerOpen(true)}
      />

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
};

export default DrawerContainer;
