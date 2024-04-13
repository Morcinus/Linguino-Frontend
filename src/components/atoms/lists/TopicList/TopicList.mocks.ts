import { action } from "@storybook/addon-actions";

import { ITopicList } from "./TopicList";

const base: ITopicList = {
  topics: [
    {
      id: "dfknfdalkfa",
      name: "Cestování",
      enabled: true,
      category: "main",
    },
    {
      id: "dfknfdalkbc",
      name: "Práce",
      enabled: false,
      category: "main",
    },
    {
      id: "dfknfdalkfc",
      name: "Rodina",
      enabled: false,
      category: "main",
    },
    {
      id: "dfknfdalkfd",
      name: "Škola",
      enabled: true,
      category: "main",
    },
    {
      id: "dfknfdalkfe",
      name: "Kultura",
      enabled: true,
      category: "main",
    },
  ],
  onTopicChange: action("onTopicChange"),
};

export const mockTopicListProps = {
  base,
};
