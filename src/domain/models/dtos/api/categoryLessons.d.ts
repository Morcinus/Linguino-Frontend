import { Category } from "../../types/category";

export interface CategoryLessons<Lesson> {
  category: Category;
  data: Array<Lesson>;
}
