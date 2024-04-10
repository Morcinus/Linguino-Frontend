import { DailyGoal } from "infrastructure/api/user/settings/Settings";

import { LanguageLevel } from "components/molecules/forms/SelectLevelForm/config";

export interface AccountSetup {
  dailyGoal: DailyGoal;
}

export type StartingLevel = LanguageLevel;
