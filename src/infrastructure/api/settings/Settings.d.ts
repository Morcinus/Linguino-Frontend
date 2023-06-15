export interface Settings {
  id: ID;
  username: string;
  name: string;
  email: string;

  notifications: {
    sendOnMobile: boolean;
    sendOnEmail: boolean;
    sendOnDesktop: boolean;

    notifyOn: {
      friendsActivities: boolean;
      somebodyFollowsUser: boolean;
      userForgetsPractice: boolean;
    };
  };

  learnOnDays: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };

  animations: boolean;
  reviewPreviousLevels: boolean;
  publicProfile: boolean;
}
