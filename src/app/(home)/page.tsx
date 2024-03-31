// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import StudyMap from "components/atoms/StudyMap/StudyMap";
import NoticeBoard from "components/molecules/NoticeBoard/NoticeBoard";
import { useTranslation } from "i18n/client";
import { UserPrivate } from "infrastructure/api/user/User";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";
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
  const {t} = useTranslation("common");
  const router = useRouter();

  useEffect(()=> {
    if(user?.lastViewedStudyMapLevel && (searchParams.level === undefined || searchParams.level === null)) {
      router.push(`/?level=${user?.lastViewedStudyMapLevel}`)
    }

    if(searchParams.level !== user?.lastViewedStudyMapLevel) {
      const change: Partial<UserPrivate> = {
        lastViewedStudyMapLevel: searchParams.level
      }
      mutateUser(change);
      LocalStorageManager.setItem<number>("lastViewedStudyMapLevel", searchParams.level);
    }
  }, [searchParams, mutateUser, user?.lastViewedStudyMapLevel, router])

  return (
    <>
      {user && <NoticeBoard fetchNewNotices={true} />}
      {user && <StudyMap courseId={user.selectedCourse.id} level={searchParams.level} lastViewedLevel={user.lastViewedStudyMapLevel ?? 0}/> }
      <BottomFab
        header={t("studying.study")}
        icon={icons.start}
        onClick={() => router.push(`/study`)}
      />
    </>
  );
};

export default HomePage;
