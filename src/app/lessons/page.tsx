// prettier-ignore
"use client"

import BottomFab from "components/atoms/BottomFab/BottomFab";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import { useTranslation } from "i18n/client";
import { LessonType } from "infrastructure/api/lessons/Lessons";
import { isLessonType } from "infrastructure/api/lessons/LessonsGuard";
import { useRouter } from "next/navigation";
import icons from "styles/icons";
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

  return (
    <>
      <ContentContainer><LessonsOverview lessonType={searchParams.type} /></ContentContainer>
      {isLessonType(lessonType) && (
        <BottomFab
          header={t("studying.study")}
          icon={icons.next}
          onClick={() => router.push(`/study?type=${lessonType}`)}
        />
      )}
    </>
  );
};

export default LessonsPage;
