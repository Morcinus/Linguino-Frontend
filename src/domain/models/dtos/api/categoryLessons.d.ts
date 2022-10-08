import { Category } from "../../types/category";
import { Lesson } from "../../types/lessons";

export interface CategoryLessons {
  category: Category;
  data: Array<Lesson>;
}
