// prettier-ignore
"use client"

import { Topic } from "infrastructure/api/courses/topics/Topics";
import { AddCourseDTO } from "infrastructure/api/user/courses/UserCourses";
import UserCoursesAPI from "infrastructure/api/user/courses/UserCoursesAPI";
import useAuth from "infrastructure/services/AuthProvider";

import { useState } from "react";

import { useRouter } from "next/navigation";

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import SelectCourseForm from "components/molecules/forms/SelectCourseForm/SelectCourseForm";
import SelectLevelForm from "components/molecules/forms/SelectLevelForm/SelectLevelForm";
import { StartOptionId } from "components/molecules/forms/SelectStartForm/config";
import SelectStartForm from "components/molecules/forms/SelectStartForm/SelectStartForm";
import SelectTopicsForm from "components/molecules/forms/SelectTopicsForm/SelectTopicsForm";
import PlacementTest from "components/molecules/PlacementTest/PlacementTest";

export interface ISelectCoursePage {}

const SelectCoursePage: React.FC<ISelectCoursePage> = () => {
  const { revalidateUser } = useAuth();
  const router = useRouter();
  const [page, setPage] = useState(0);

  const [selectedCourseId, setSelectedCourseId] = useState<ID>();
  const [selectedTopics, setSelectedTopics] = useState<Array<Topic>>([]);
  const [startOptionId, setStartOptionId] = useState<StartOptionId>();
  const { courses } = UserCoursesAPI.useUserCourses();

  function incrementPage() {
    setPage(page + 1);
  }

  function decrementPage() {
    if (page > 0) setPage(page - 1);
  }

  async function submitSetup(course: AddCourseDTO) {
    await UserCoursesAPI.addUserCourse(course);
    await revalidateUser();
    router.push("/");
  }

  return (
    <ContentContainer>
      {page === 0 ? (
        <>
          {courses && (
            <SelectCourseForm
              onSubmit={(courseId) => {
                setSelectedCourseId(courseId);
                incrementPage();
              }}
              omitCourseIds={courses.map((course) => course.id)}
            />
          )}
        </>
      ) : page === 1 ? (
        <>
          {selectedCourseId && (
            <SelectTopicsForm
              courseId={selectedCourseId}
              onSubmit={(topics) => {
                setSelectedTopics(topics);
                incrementPage();
              }}
            />
          )}
        </>
      ) : page === 2 ? (
        <>
          {selectedCourseId && (
            <SelectStartForm
              onSubmit={(startOptionId) => {
                setStartOptionId(startOptionId);

                if (startOptionId === "startFromZero") {
                  submitSetup({
                    id: selectedCourseId,
                    selectedTopicIds: selectedTopics.map((topic) => topic.id),
                    startingLevel: "a1",
                  });
                } else {
                  incrementPage();
                }
              }}
            />
          )}
        </>
      ) : (
        <>
          {startOptionId === "selectLevel" && selectedCourseId && (
            <SelectLevelForm
              onSubmit={(levelOption) =>
                submitSetup({
                  id: selectedCourseId,
                  selectedTopicIds: selectedTopics.map((topic) => topic.id),
                  startingLevel: levelOption.id,
                })
              }
            />
          )}

          {startOptionId === "takeTest" && selectedCourseId && (
            <PlacementTest
              courseId={selectedCourseId}
              onSubmit={(levelOption) =>
                submitSetup({
                  id: selectedCourseId,
                  selectedTopicIds: selectedTopics.map((topic) => topic.id),
                  startingLevel: levelOption,
                })
              }
              onCancel={() => {
                decrementPage();
                setStartOptionId(undefined);
              }}
            />
          )}
        </>
      )}
    </ContentContainer>
  );
};

export default SelectCoursePage;
