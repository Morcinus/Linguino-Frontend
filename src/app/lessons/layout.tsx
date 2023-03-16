"use client"

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import { useRouter, useSearchParams } from 'next/navigation';
import icons from "styles/icons";
import LessonFab from "../../components/atoms/LessonFab/LessonFab";
import { isLessonType } from "../../infrastructure/api/lessons/LessonsGuard";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const searchParams = useSearchParams();
  const lessonType = searchParams?.get('type');
  const router = useRouter()

  return (
    <>
      <ContentContainer>{children}</ContentContainer>
      {isLessonType(lessonType) && <LessonFab icon={icons.next} onClick={()=>router.push(`/study?type=${lessonType}`)} />}
    </>
  );
};

export default Layout;
