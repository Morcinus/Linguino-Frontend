import { Category } from "../../types/category";

export interface CategoryLessons<LessonType> {
  category: Category;
  data: Array<LessonType>;
}
