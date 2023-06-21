import { Notice } from "infrastructure/api/users/notices/Notices";
import NoticesAPI from "infrastructure/api/users/notices/NoticesAPI";

import { ReactNode, createContext, useContext, useState } from "react";

export interface NoticeContextType {
  notices: Array<Notice>;
  addNotice: (notice: Notice, local?: boolean) => void;
  popNotice: () => void;
  fetchNotices: (userId: ID) => Promise<void>;
  deleteNotice: (userId: ID, noticeId: ID) => void;
}

export const NoticeContext = createContext<NoticeContextType>(
  {} as NoticeContextType
);

// Source: https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10
export function NoticeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [notices, setNotices] = useState<Array<Notice>>([]);

  function addNotice() {
    console.log("TODO");
  }

  function popNotice() {
    setNotices(notices.slice(1));
  }

  async function fetchNotices(userId: ID) {
    const newNotices = await NoticesAPI.getNotices(userId);

    setNotices([...notices, ...newNotices]);

    return Promise.resolve();
  }

  async function deleteNotice(userId: ID, noticeId: ID) {
    setNotices(notices.filter((e) => e.id !== noticeId));
    await NoticesAPI.deleteNotice(userId, noticeId);
  }

  return (
    <NoticeContext.Provider
      value={{
        notices,
        addNotice,
        popNotice,
        deleteNotice,
        fetchNotices,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
}

export default function useNotices(): NoticeContextType {
  return useContext(NoticeContext);
}
