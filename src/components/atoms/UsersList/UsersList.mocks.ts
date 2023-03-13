import { action } from "@storybook/addon-actions";

import { IUsersList } from "./UsersList";

const base: IUsersList = {
  onFollow: action("onFollow"),
  onUnfollow: action("onUnfollow"),
  users: [
    {
      id: "fsaklnkjdsafdasf",
      name: "Ruth Campbell",
      isFollowed: true,
      username: "ruthcampbell",
    },
    {
      id: "daggfafgfafddsaf",
      name: "Danielle Smith",
      isFollowed: true,
      username: "daniellesmith",
    },
    {
      id: "fsdaffgbnhdnff",
      name: "Sasha Townsend",
      isFollowed: true,
      username: "sashatownsend",
    },
    {
      id: "ngsgdbdshsghsgh",
      name: "Janelle Patton",
      isFollowed: true,
      username: "janellepatton",
    },
    {
      id: "sghsgdshdhhsdhsd",
      name: "Ashlyn Owens",
      isFollowed: true,
      username: "ashlynowens",
    },
    {
      id: "fsaklnkjdsafdasf",
      name: "Alma Gross",
      isFollowed: true,
      username: "almagross",
    },
    {
      id: "daggfafgfafddsaf",
      name: "Tina Harris",
      isFollowed: true,
      username: "tinaharris",
    },
    {
      id: "fsdaffgbnhdnff",
      name: "Susan Moran",
      isFollowed: true,
      username: "susanmoran",
    },
    {
      id: "ngsgdbdshsghsgh",
      name: "Mackenzie Lawrence",
      isFollowed: true,
      username: "mackenzielawrence",
    },
    {
      id: "sghsgdshdhhsdhsd",
      name: "Sara Pham",
      isFollowed: true,
      username: "sarapham",
    },
  ],
};

export const mockUsersListProps = {
  base,
};
