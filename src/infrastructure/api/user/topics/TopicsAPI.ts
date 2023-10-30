import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Topic } from "./Topics";

export interface TopicParams {
  category?: "main" | "extra";
}

const TopicsAPI = {
  URI: (courseId: ID) => `user/courses/${courseId}/topics`,

  useTopics(
    courseId: ID,
    params: TopicParams = {}
  ): Modify<FetchHook<Array<Topic>>, { topics: Array<Topic> }> {
    const { data, ...rest } = useAPI<Array<Topic>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { topics: data, ...rest };
  },

  async enableTopic(courseId: ID, topicId: ID): Promise<void> {
    return API.put(`${this.URI(courseId)}/${topicId}`, {});
  },

  async disableTopic(courseId: ID, topicId: ID): Promise<void> {
    return API.delete(`${this.URI(courseId)}/${topicId}`);
  },
};

export default TopicsAPI;
