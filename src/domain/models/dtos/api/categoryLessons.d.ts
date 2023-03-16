import { Lesson } from "infrastructure/api/lessons/Lessons";

import { Category } from "../../types/category";

export interface CategoryLessons {
  category: Category;
  data: Array<Lesson>;
}
