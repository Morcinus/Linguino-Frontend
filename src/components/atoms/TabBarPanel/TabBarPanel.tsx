import { useTranslation } from "i18n/client";

import { ReactNode } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Card, CardContent, Tab, Tabs } from "@mui/material";

interface TabItem {
  name: string;
  id: ID;
}

export interface ITabBarPanel {
  onChange: (newValue: ID) => void;
  tabs: Array<TabItem>;
  panelContent: ReactNode;
  value: ID;
}

const TabBarPanel: React.FC<ITabBarPanel> = ({
  onChange,
  tabs,
  panelContent,
  value,
}) => {
  const { t } = useTranslation("cs", "common");

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
