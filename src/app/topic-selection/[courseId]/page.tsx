// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import { Topic } from "infrastructure/api/courses/topics/Topics";
import TopicsAPI from "infrastructure/api/courses/topics/TopicsAPI";

import { useState } from "react";

import Box from "@mui/material/Box";

import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import TopicList from "components/atoms/lists/TopicList/TopicList";

export interface ITopicSelectionPage {
  params: {
    courseId: ID;
  };
}

const TopicSelectionPage: React.FC<ITopicSelectionPage> = ({
  params,
}) => {
  const [value, setValue] = useState<string>("main");
  const { topics: mainTopics, mutate: mutateMainTopics } = TopicsAPI.useTopics(
    params.courseId,
    { tag: "main" }
  );
  const { topics: extraTopics, mutate: mutateExtraTopics } =
    TopicsAPI.useTopics(params.courseId, { tag: "extra" });
  const { t } = useTranslation("cs", "common");

  const updateMainTopics = (topicId: ID, change: Partial<Topic>) => {
    mutateMainTopics(
      async () => {
        try {
          await TopicsAPI.updateTopic(params.courseId, {
            id: topicId,
            ...change,
          });
        } catch (err) {
          return Promise.reject(err);
        }

        return mainTopics.map((topic) => {
          if (topic.id === topicId) return { ...topic, ...change };
          else return topic;
        });
      },
      optimisticMutationOption<Array<Topic>>(
        mainTopics.map((topic) => {
          if (topic.id === topicId) return { ...topic, ...change };
          else return topic;
        })
      )
    );
  };

  const updateExtraTopics = (topicId: ID, change: Partial<Topic>) => {
    mutateExtraTopics(
      async () => {
        try {
          await TopicsAPI.updateTopic(params.courseId, {
            id: topicId,
            ...change,
          });
        } catch (err) {
          return Promise.reject(err);
        }

        return extraTopics.map((topic) => {
          if (topic.id === topicId) return { ...topic, ...change };
          else return topic;
        });
      },
      optimisticMutationOption<Array<Topic>>(
        extraTopics.map((topic) => {
          if (topic.id === topicId) return { ...topic, ...change };
          else return topic;
        })
      )
    );
  };

  return (
    <>
      {params.courseId ? (
        <Box sx={{ width: "100%" }}>
          <TabBarPanel
            onChange={(value) => setValue(value)}
            tabs={[
              {
                id: "main",
                name: t("topics.main"),
              },
              {
                id: "extra",
                name: t("topics.extra"),
              },
            ]}
            panelContent={
              value === "main"
                ? mainTopics && (
                    <TopicList
                      topics={mainTopics}
                      onTopicChange={(id, enabled) =>
                        updateMainTopics(id, { enabled })
                      }
                    />
                  )
                : value === "extra"
                ? extraTopics && (
              
                    <TopicList
                      topics={extraTopics}
                      onTopicChange={(id, enabled) =>
                        updateExtraTopics(id, { enabled })
                      }
                    />
                  )
                : undefined
            }
            value={value}
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default TopicSelectionPage;
