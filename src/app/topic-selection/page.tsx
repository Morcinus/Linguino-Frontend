// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import TopicsOverview from "components/layouts/TopicsOverview/TopicsOverview";

export interface ITopicSelectionPage {}

const TopicSelectionPage: React.FC<ITopicSelectionPage> = () => {
  const { user } = useAuth();

  return <>{user && <TopicsOverview courseId={user.selectedCourse.id} />}</>;
};

export default TopicSelectionPage;
