import { action } from "@storybook/addon-actions";

import { ITopicList } from "./TopicList";

const base: ITopicList = {
  topics: [
    {
      id: "dfknfdalkfa",
      name: "Cestování",
      thumbnailURL: "https://picsum.photos/id/168/512/512",
      enabled: true,
    },
    {
      id: "dfknfdalkbc",
      name: "Práce",
      thumbnailURL: "https://picsum.photos/id/168/512/512",
      enabled: false,
    },
    {
      id: "dfknfdalkfc",
      name: "Rodina",
      thumbnailURL: "https://picsum.photos/id/168/512/512",
      enabled: false,
    },
    {
      id: "dfknfdalkfd",
      name: "Škola",
      thumbnailURL: "https://picsum.photos/id/168/512/512",
      enabled: true,
    },
    {
      id: "dfknfdalkfe",
      name: "Kultura",
      thumbnailURL: "https://picsum.photos/id/168/512/512",
      enabled: true,
    },
  ],
  onTopicChange: action("onTopicChange"),
};

export const mockTopicListProps = {
  base,
};
