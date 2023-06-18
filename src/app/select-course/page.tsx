// prettier-ignore
"use client"

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import SelectCourseForm from "components/molecules/forms/SelectCourseForm/SelectCourseForm";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import { default as UserCoursesAPI } from "infrastructure/api/users/courses/CoursesAPI";
import useAuth from "infrastructure/services/AuthProvider";
import { useRouter } from "next/navigation";

export interface ISelectCoursePage {
  params: {
    userId: string;
  };
}

const SelectCoursePage: React.FC<ISelectCoursePage> = ({ params }) => {
  const { mutateUser } = useAuth();
  const router = useRouter();
  

  return (
    <ContentContainer>
      <SelectCourseForm
        onSubmit={async (courseId: ID) => {
          await UserCoursesAPI.createCourse(params.userId, {courseId: courseId});
          
          await mutateUser({
            selectedCourse: await CoursesAPI.getCourse(courseId),
          });
          router.push("/");
        }}
      />
    </ContentContainer>
  );
};

export default SelectCoursePage;
