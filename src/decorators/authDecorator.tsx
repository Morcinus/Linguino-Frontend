import { Story } from "@storybook/react";

import {
  AuthContext,
  AuthContextType,
} from "../infrastructure/services/AuthProvider";

export default function AuthDecorator(Story: Story) {
  const mock: AuthContextType = {
    loading: false,
    user: {
      email: "example@example.com",
      id: "123",
      selectedCourse: {
        id: "abcd",
        name: "Czech course",
        language1: "cs",
        language2: "cs",
        thumbnailURL: "https://picsum.photos/id/168/512/512",
      },
      username: "Pepa Okurka",
      balance: 999,
      completedDailyGoal: true,
    },
    login: () => console.log("login"),
    logout: () => console.log("logout"),
    signUp: () => console.log("signup"),
    mutateUser: () => console.log("mutateUser"),
  };

  return (
    <div>
      <AuthContext.Provider value={mock}>
        <Story />
      </AuthContext.Provider>
    </div>
  );
}
