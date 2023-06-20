import { Exercise } from "domain/models/types/exercises";
import API from "infrastructure/api/API";
import { parseQueryParams } from "util/functions/api";

export interface ExerciseParams {
  pagination?: {
    // By page
    page?: number;
    pageSize?: number;

    // By offset
    start?: number;
    limit?: number;
  };
}

const ExercisesAPI = {
  URI: (userId: ID) => `users/${userId}/exercises`,

  async getExercises(
    userId: ID,
    params: ExerciseParams = {}
  ): Promise<Array<Exercise>> {
    return API.get(`${this.URI(userId)}?${parseQueryParams(params)}`);
  },
};

export default ExercisesAPI;
