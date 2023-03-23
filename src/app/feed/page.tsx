// prettier-ignore
"use client"

import FeedOverview from "components/layouts/FeedOverview/FeedOverview";
import useAuth from "infrastructure/services/AuthProvider";

export interface IFeed {}

const Feed: React.FC<IFeed> = () => {
const {user} = useAuth();

  return <>{user && <FeedOverview userId={user.id}/>}</>
};

export default Feed;
