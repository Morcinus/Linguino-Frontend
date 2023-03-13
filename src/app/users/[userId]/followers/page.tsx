// prettier-ignore
"use client"

import FollowersOverview from "components/layouts/FollowersOverview/FollowersOverview";

export interface IFollowersPage {
  params: {
    userId: string
  }
}

const FollowersPage: React.FC<IFollowersPage> = ({ params }) => {
  return <FollowersOverview userId={params.userId}/>;
};

export default FollowersPage;
