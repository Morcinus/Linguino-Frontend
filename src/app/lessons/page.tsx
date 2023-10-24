// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { LessonType } from "infrastructure/api/user/courses/lessons/Lessons";
import { isLessonType } from "infrastructure/api/user/courses/lessons/LessonsGuard";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

import LessonsOverview from "../../components/layouts/LessonsOverview/LessonsOverview";

export interface ILessonsPage {
  searchParams: {
    type: LessonType;
  };
}

const LessonsPage: React.FC<ILessonsPage> = ({ searchParams }) => {
  const { t } = useTranslation("cs", "common");
  const lessonType = searchParams.type;
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      {user && (
        <>
          <ContentContainer>
            <LessonsOverview
              courseId={user.selectedCourse.id}
              lessonType={searchParams.type}
            />
          </ContentContainer>
          {isLessonType(lessonType) && (
            <BottomFab
              header={t("studying.study")}
              icon={icons.next}
              onClick={() => router.push(`/study?type=${lessonType}`)}
            />
          )}
        </>
      )}
    </>
  );
};

export default LessonsPage;
