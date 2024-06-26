// prettier-ignore
"use client"

import { EnrollInCourseDTO } from "infrastructure/api/user/courses/UserCourses";
import UserCoursesAPI from "infrastructure/api/user/courses/UserCoursesAPI";
import { Topic } from "infrastructure/api/user/topics/Topics";
import useAuth from "infrastructure/services/AuthProvider";

import { useState } from "react";

import { useRouter } from "next/navigation";

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import PlacementTest from "components/molecules/PlacementTest/PlacementTest";
import SelectCourseForm from "components/molecules/forms/SelectCourseForm/SelectCourseForm";
import SelectLevelForm from "components/molecules/forms/SelectLevelForm/SelectLevelForm";
import SelectStartForm from "components/molecules/forms/SelectStartForm/SelectStartForm";
import { StartOptionId } from "components/molecules/forms/SelectStartForm/config";
import SelectTopicsForm from "components/molecules/forms/SelectTopicsForm/SelectTopicsForm";

export interface ISelectCoursePage {}

const SelectCoursePage: React.FC<ISelectCoursePage> = () => {
  const { revalidateUser } = useAuth();
  const router = useRouter();
  const [page, setPage] = useState(0);

  const [selectedCourseId, setSelectedCourseId] = useState<Id>();
  const [selectedTopics, setSelectedTopics] = useState<Array<Topic>>([]);
  const [startOptionId, setStartOptionId] = useState<StartOptionId>();
  const { courses } = UserCoursesAPI.useUserCourses();

  function incrementPage() {
    setPage(page + 1);
  }

  function decrementPage() {
    if (page > 0) setPage(page - 1);
  }

  async function submitSetup(courseId: Id, content: EnrollInCourseDTO) {
    await UserCoursesAPI.enrollInCourse(courseId, content);
    await revalidateUser();
    router.push("/");
  }

  return (
    <>
      {page === 0 ? (
        <ContentContainer>
          {courses && (
            <SelectCourseForm
              onSubmit={(courseId) => {
                setSelectedCourseId(courseId);
                incrementPage();
              }}
              omitCourseIds={courses.map((course) => course.id)}
            />
          )}
        </ContentContainer>
      ) : page === 1 ? (
        <ContentContainer>
          {selectedCourseId && (
            <SelectTopicsForm
              courseId={selectedCourseId}
              onSubmit={(topics) => {
                setSelectedTopics(topics);
                incrementPage();
              }}
            />
          )}
        </ContentContainer>
      ) : page === 2 ? (
        <ContentContainer>
          {selectedCourseId && (
            <SelectStartForm
              onSubmit={(startOptionId) => {
                setStartOptionId(startOptionId);

                if (startOptionId === "startFromZero") {
                  submitSetup(selectedCourseId, {
                    selectedTopicIds: selectedTopics.map((topic) => topic.id),
                    startingLevel: "a1",
                  });
                } else {
                  incrementPage();
                }
              }}
            />
          )}
        </ContentContainer>
      ) : (
        <>
          {startOptionId === "selectLevel" && selectedCourseId && (
            <ContentContainer>
              <SelectLevelForm
                onSubmit={(levelOption) =>
                  submitSetup(selectedCourseId, {
                    selectedTopicIds: selectedTopics.map((topic) => topic.id),
                    startingLevel: levelOption.id,
                  })
                }
              />
            </ContentContainer>
          )}

          {startOptionId === "takeTest" && selectedCourseId && (
            <PlacementTest
              courseId={selectedCourseId}
              onSubmit={(levelOption) =>
                submitSetup(selectedCourseId, {
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
    </>
  );
};

export default SelectCoursePage;
