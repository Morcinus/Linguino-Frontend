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
    icon: undefined,
    path: "/?level=0",
  },
  {
    label: "levels.1",
    icon: undefined,
    path: "/?level=1",
  },
  {
    label: "levels.2",
    icon: undefined,
    path: "/?level=2",
  },
  {
    label: "levels.3",
    icon: undefined,
    path: "/?level=3",
  },
  {
    label: "levels.4",
    icon: undefined,
    path: "/?level=4",
  },
  {
    label: "levels.5",
    icon: undefined,
    path: "/?level=5",
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
  {
    label: "navigation.help",
    icon: icons.help,
    path: "/help",
  },
  {
    label: "navigation.bugReport",
    icon: icons.bugReport,
    path: "/bug-report",
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
