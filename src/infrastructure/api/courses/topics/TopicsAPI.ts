import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Topic } from "./Topics";

export interface TopicParams {
  tag?: "main" | "extra";
}

const TopicsAPI = {
  URI: (courseId: ID) => `courses/${courseId}/topics`,

  useTopics(
    courseId: ID,
    params: TopicParams = {}
  ): Modify<FetchHook<Array<Topic>>, { topics: Array<Topic> }> {
    const { data, ...rest } = useAPI<Array<Topic>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { topics: data, ...rest };
  },

  async updateTopic(courseId: ID, topic: Partial<Topic>): Promise<Topic> {
    return API.put(`${this.URI(courseId)}/${topic.id}`, topic);
  },
};

export default TopicsAPI;
