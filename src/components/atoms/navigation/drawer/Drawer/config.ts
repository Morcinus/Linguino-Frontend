import icons from "../../../../../styles/icons";

export const drawerWidth = 240;

export const lessons = [
  {
    label: "studying.vocabulary",
    icon: icons.vocabulary,
    path: "/lessons?type=VOCABULARY",
  },
  {
    label: "studying.grammar",
    icon: icons.grammar,
    path: "/lessons?type=GRAMMAR",
  },
  {
    label: "studying.pronunciation",
    icon: icons.pronunciation,
    path: "/lessons?type=PRONUNCIATION",
  },
  {
    label: "studying.speaking",
    icon: icons.speaking,
    path: "/lessons?type=SPEAKING",
  },
  {
    label: "studying.reading",
    icon: icons.reading,
    path: "/lessons?type=READING",
  },
  {
    label: "studying.listening",
    icon: icons.listening,
    path: "/lessons?type=LISTENING",
  },
];

export const levels = [
  {
    label: "levels.0",
    icon: "signpost_outlined",
    path: "/?level=0",
    premium: false,
  },
  {
    label: "levels.1",
    icon: "signpost_outlined",
    path: "/?level=1",
    premium: false,
  },
  {
    label: "levels.2",
    icon: "signpost_outlined",
    path: "/?level=2",
    premium: false,
  },
  {
    label: "levels.3",
    icon: "signpost_outlined",
    path: "/?level=3",
    premium: false,
  },
  {
    label: "levels.4",
    icon: "signpost_outlined",
    path: "/?level=4",
    premium: true,
  },
  {
    label: "levels.5",
    icon: "signpost_outlined",
    path: "/?level=5",
    premium: true,
  },
];

export const studying = [
  {
    label: "navigation.favorites",
    icon: icons.favorites,
    path: "/favorites",
  },
  {
    label: "navigation.myVocabulary",
    icon: icons.myVocabulary,
    path: "/user-lessons",
  },
  {
    label: "navigation.courses",
    icon: icons.courses,
    path: "/courses",
  },
];

export const other = [
  {
    label: "navigation.search",
    icon: icons.search,
    path: "/search",
  },
  /* Isn't implemented on backend in v1.0.0  {
    label: "navigation.help",
    icon: icons.help,
    path: "/help",
  }, */
  {
    label: "navigation.premium",
    icon: icons.premium,
    path: "/subscription",
  },
  {
    label: "navigation.settings",
    icon: icons.settings,
    path: "/settings",
  },
  {
    label: "navigation.logout",
    icon: icons.logout,
    path: "/logout",
  },
];
