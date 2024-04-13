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
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "daggfafgfafddsaf",
      name: "Danielle Smith",
      isFollowed: true,
      username: "daniellesmith",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "fsdaffgbnhdnff",
      name: "Sasha Townsend",
      isFollowed: true,
      username: "sashatownsend",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "ngsgdbdshsghsgh",
      name: "Janelle Patton",
      isFollowed: true,
      username: "janellepatton",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "sghsgdshdhhsdhsd",
      name: "Ashlyn Owens",
      isFollowed: true,
      username: "ashlynowens",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "fsaklnkjdsafdasf",
      name: "Alma Gross",
      isFollowed: true,
      username: "almagross",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "daggfafgfafddsaf",
      name: "Tina Harris",
      isFollowed: true,
      username: "tinaharris",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "fsdaffgbnhdnff",
      name: "Susan Moran",
      isFollowed: true,
      username: "susanmoran",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "ngsgdbdshsghsgh",
      name: "Mackenzie Lawrence",
      isFollowed: true,
      username: "mackenzielawrence",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
    {
      id: "sghsgdshdhhsdhsd",
      name: "Sara Pham",
      isFollowed: true,
      username: "sarapham",
      profileImageUrl: "https://picsum.photos/id/168/512/512",
    },
  ],
};

export const mockUsersListProps = {
  base,
};
