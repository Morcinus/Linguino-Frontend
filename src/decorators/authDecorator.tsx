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
        name: "Czech course",
        language1: "cs",
        language2: "cs",
      },
      username: "Pepa Okurka",
      streak: 42,
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
