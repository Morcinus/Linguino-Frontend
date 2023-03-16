// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import icons from "styles/icons";

import { Box } from "@mui/material";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import { useRouter } from "next/navigation";

export interface ILayout {
  children: React.ReactNode;
  params: {
    lessonId: string;
  };
}

const Layout: React.FC<ILayout> = ({ children, params }) => {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <>
      <Box sx={{ pt: 8 }}>{children}</Box>
      <BottomFab
        header={t("studying.studyLesson")}
        icon={icons.next}
        onClick={() => router.push(`/study?lessonId=${params.lessonId}`)}
      />
    </>
  );
};

export default Layout;
