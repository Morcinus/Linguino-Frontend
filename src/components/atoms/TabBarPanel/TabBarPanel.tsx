import { useTranslation } from "i18n/client";

import { ReactNode } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

interface TabItem {
  name: string;
  id: Id;
}

export interface ITabBarPanel {
  onChange: (newValue: Id) => void;
  tabs: Array<TabItem>;
  panelContent: ReactNode;
  value: Id;
}

const TabBarPanel: React.FC<ITabBarPanel> = ({
  onChange,
  tabs,
  panelContent,
  value,
}) => {
  const { t } = useTranslation("common");

  return (
    <TabContext value={value}>
      <Card>
        <CardContent
          sx={{
            p: 1,
            "&:last-child": {
              paddingBottom: 1,
            },
          }}
        >
          <Tabs
            value={value}
            onChange={(_, newValue) => onChange(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { background: "rgba(0,0,0,0)" } }}
          >
            {tabs?.map((item: TabItem) => {
              return (
                <Tab
                  label={item.name ? t(item.name) : undefined}
                  value={item.id}
                  key={item.id}
                  sx={{
                    "&.Mui-selected": {
                      color: "primary.contrastText",
                      backgroundColor: "primary.main",
                      borderRadius: 1,
                    },
                    minWidth: "fit-content",
                    maxWidth: "100%",
                    flex: 1,
                  }}
                />
              );
            })}
          </Tabs>
        </CardContent>
      </Card>

      {tabs?.map((item: TabItem) => {
        return (
          <TabPanel value={item.id} sx={{ pt: 1, px: 0 }} key={item.id}>
            {panelContent}
          </TabPanel>
        );
      })}
    </TabContext>
  );
};

export default TabBarPanel;
