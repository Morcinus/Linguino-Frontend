// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import StudyMap from "components/atoms/StudyMap/StudyMap";
import NoticeBoard from "components/molecules/NoticeBoard/NoticeBoard";
import { useTranslation } from "i18n/client";
import { UserPrivate } from "infrastructure/api/user/User";
import UserAPI from "infrastructure/api/user/UserAPI";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import icons from "styles/icons";

export interface IHomePage {
  searchParams: {
    level: number;
  };
}

const HomePage: React.FC<IHomePage> = ({searchParams}) => {
  const { user, mutateUser } = useAuth();
  const {t} = useTranslation("cs", "common");
  const router = useRouter();

  useEffect(()=> {
    if(searchParams.level !== user?.lastViewedStudyMapLevel) {
      const change: Partial<UserPrivate> = {
        lastViewedStudyMapLevel: searchParams.level
      }
      UserAPI.updateUser(change);
      mutateUser(change);
    }
  }, [searchParams, mutateUser, user?.lastViewedStudyMapLevel])

  return (
    <>
      {user && <NoticeBoard userId={user.id} fetchNewNotices={true} />}
      {user && <StudyMap userId={user.id} courseId={user.selectedCourse.id} level={searchParams.level} lastViewedLevel={user.lastViewedStudyMapLevel ?? 0}/> }
      <BottomFab
        header={t("studying.study")}
        icon={icons.start}
        onClick={() => router.push(`/study`)}
      />
    </>
  );
};

export default HomePage;
