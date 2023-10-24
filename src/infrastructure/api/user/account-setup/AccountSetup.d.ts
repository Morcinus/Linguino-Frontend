import { DailyGoal } from "infrastructure/api/settings/Settings";

import { LevelOptionId } from "components/molecules/forms/SelectLevelForm/config";

export interface AccountSetup {
  dailyGoal: DailyGoal;
  selectedCourse: {
    id: ID;
    startingLevel: StartingLevel;
    selectedTopicIds: Array<ID>;
  };
}

export type StartingLevel = LevelOptionId;
