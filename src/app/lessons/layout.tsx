// prettier-ignore
"use client";

import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { useRouter, useSearchParams } from "next/navigation";

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

import BottomFab from "../../components/atoms/BottomFab/BottomFab";
import { isLessonType } from "../../infrastructure/api/lessons/LessonsGuard";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { t } = useTranslation("cs", "common");
  const searchParams = useSearchParams();
  const lessonType = searchParams?.get("type");
  const router = useRouter();

  return (
    <>
      <ContentContainer>{children}</ContentContainer>
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

export default Layout;
