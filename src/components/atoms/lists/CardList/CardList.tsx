import React, { ReactNode } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

export interface ICardList {
  children: ReactNode;
}

const CardList: React.FC<ICardList> = ({ children }) => {
  return (
    <Card>
      <CardContent
        sx={{
          px: 0,
          py: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <List>
          {React.Children.map(children, (child, i) => {
            return (
              <React.Fragment>
                {child}
                {i + 1 !== React.Children.count(children) && (
                  <Divider sx={{ mx: 2 }} />
                )}
              </React.Fragment>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default CardList;
