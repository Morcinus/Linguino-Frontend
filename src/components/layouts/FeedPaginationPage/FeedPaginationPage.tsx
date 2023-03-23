import { useTranslation } from "i18n/client";
import { FeedMessage } from "infrastructure/api/users/feed/Feed";
import FeedAPI from "infrastructure/api/users/feed/FeedAPI";
import {
  isFeedArticle,
  isFeedMessage,
  isFeedVideo,
} from "infrastructure/api/users/feed/FeedGuard";
import mutateArrayItem from "infrastructure/api/utils/mutateArrayItem";

import { ReactNode, useEffect, useState } from "react";

import { Box } from "@mui/system";

import DividerWithText from "components/atoms/DividerWithText/DividerWithText";
import FeedArticleCard from "components/atoms/cards/FeedArticleCard/FeedArticleCard";
import FeedMessageCard from "components/atoms/cards/FeedMessageCard/FeedMessageCard";
import FeedVideoCard from "components/atoms/cards/FeedVideoCard/FeedVideoCard";

export interface IFeedPaginationPage {
  userId: ID;
  index: number;
}

const FeedPaginationPage: React.FC<IFeedPaginationPage> = ({
  userId,
  index,
}) => {
  const { t } = useTranslation("cs", "common");
  const { feed, mutate } = FeedAPI.useFeed(userId, { page: index });
  const [seenByUser, setSeenByUser] = useState(false);

  function handleReactionClick(feedItem: FeedMessage, reactionText: ID) {
    mutateArrayItem(
      feed,
      feedItem.id,
      {
        reactions: feedItem.reactions
          .map((reaction) => {
            if (reaction.text === reactionText) {
              if (reaction.reactedByUser === false)
                return {
                  ...reaction,
                  reactedByUser: true,
                  counter: reaction.counter + 1,
                };
              else
                return {
                  ...reaction,
                  reactedByUser: false,
                  counter: reaction.counter - 1,
                };
            }
            return reaction;
          })
          .filter((reaction) => reaction.counter !== 0),
      },
      mutate,
      (params) => FeedAPI.updateFeed(userId, params)
    );
  }

  function handleAddReaction(feedItem: FeedMessage, reactionText: string) {
    let reactionExists = false;

    const reactions = feedItem.reactions.map((reaction) => {
      if (reaction.text === reactionText) {
        reactionExists = true;
        if (reaction.reactedByUser === false)
          return {
            ...reaction,
            reactedByUser: true,
            counter: reaction.counter + 1,
          };
        else
          return {
            ...reaction,
            reactedByUser: false,
            counter: reaction.counter - 1,
          };
      }
      return reaction;
    });

    if (!reactionExists)
      reactions.push({
        counter: 1,
        reactedByUser: true,
        text: reactionText,
      });

    mutateArrayItem(
      feed,
      feedItem.id,
      {
        reactions,
      },
      mutate,
      (params) => FeedAPI.updateFeed(userId, params)
    );
  }

  useEffect(() => {
    if (feed !== undefined && !seenByUser) {
      FeedAPI.updateFeed(userId, { id: feed[0].id, seenByUser: true });
      setSeenByUser(true);
    }
  }, [feed, userId, seenByUser]);

  function renderFeed() {
    const markup: Array<ReactNode> = [];
    let hasDivider = false;

    feed.forEach((feedItem, i) => {
      console.log(feedItem);
      if (!hasDivider && feedItem.seenByUser === true) {
        hasDivider = true;

        if (i !== 0)
          markup.push(
            <Box>
              <DividerWithText
                key={`${feedItem.id}-divider`}
                text={t("feed.earlier")}
                variant="subtitle2"
              />
            </Box>
          );
      }
      if (isFeedArticle(feedItem))
        markup.push(
          <FeedArticleCard key={feedItem.id} feedArticle={feedItem} />
        );
      if (isFeedVideo(feedItem))
        markup.push(<FeedVideoCard key={feedItem.id} feedVideo={feedItem} />);
      if (isFeedMessage(feedItem))
        markup.push(
          <FeedMessageCard
            key={feedItem.id}
            feedMessage={feedItem}
            onReactionClick={(reactionText) =>
              handleReactionClick(feedItem, reactionText)
            }
            onAddReaction={(reactionText) =>
              handleAddReaction(feedItem, reactionText)
            }
          />
        );
    });

    return markup;
  }

  return <>{feed && renderFeed()}</>;
};

export default FeedPaginationPage;
