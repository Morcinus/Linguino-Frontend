// prettier-ignore
"use client"

import ProtectedRoute from "components/layouts/authentication/ProtectedRoute/ProtectedRoute";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ProtectedRoute>
      <ContentContainer disablePadding>{children}</ContentContainer>
    </ProtectedRoute>
  );
};

export default Layout;
