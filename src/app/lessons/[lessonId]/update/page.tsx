// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";
import { useSnackbar } from "notistack";

import LessonCreateUpdate from "components/layouts/LessonCreateUpdate/LessonCreateUpdate";

export interface IUpdateLessonPage {
  params: {
    lessonId: string;
  };
}

const UpdateLessonPage: React.FC<IUpdateLessonPage> = ({ params }) => {
  const { lesson, mutate } = LessonsAPI.useLesson(params.lessonId);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {lesson && (
        <LessonCreateUpdate
          lesson={{
            name: lesson.name,
            description: lesson.description,
            items: lesson.items || [],
            id: lesson.id,
          }}
          onSave={async (savedLesson) => {
            const data = {
              id: params.lessonId,
              name: savedLesson.name,
              description: savedLesson.description,
              items: savedLesson.items,
            };

            await mutate(
              LessonsAPI.updateLesson(data),
              optimisticMutationOption(data)
            );

            enqueueSnackbar(t("userLessons.lessonSaved"), {
              variant: "success",
            });
          }}
        />
      )}
    </>
  );
};

export default UpdateLessonPage;
