// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";
import { useSnackbar } from "notistack";

import LessonCreateUpdate from "components/layouts/LessonCreateUpdate/LessonCreateUpdate";
import { useRouter } from "next/navigation";

export interface ICreateLessonPage {}

const CreateLessonPage: React.FC<ICreateLessonPage> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <>
      <LessonCreateUpdate
        lesson={{
          name: "",
          description: "",
          items: [],
        }}
        onSave={async (savedLesson) => {
          const data = {
            name: savedLesson.name,
            description: savedLesson.description,
            items: savedLesson.items,
          };

          await LessonsAPI.createLesson(data);
          enqueueSnackbar(t("userLessons.lessonCreated"), {
            variant: "success",
          });
          router.push("/user-lessons")
        }}
        isCreate={true}
      />
    </>
  );
};

export default CreateLessonPage;
