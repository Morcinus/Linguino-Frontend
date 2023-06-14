import { Topic } from "infrastructure/api/courses/topics/Topics";

import { ListItem, ListItemText, Switch } from "@mui/material";

import CardList from "../CardList/CardList";

export interface ITopicList {
  topics: Array<Topic>;
  onTopicChange: (topicId: ID, enabled: boolean) => void;
}

const TopicList: React.FC<ITopicList> = ({ topics, onTopicChange }) => {
  return (
    <CardList>
      {topics.map((topic) => {
        return (
          <ListItem
            key={topic.id}
            secondaryAction={
              <Switch
                checked={topic.enabled}
                onClick={() => onTopicChange(topic.id, !topic.enabled)}
              />
            }
          >
            <ListItemText primary={topic.name} />
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default TopicList;
