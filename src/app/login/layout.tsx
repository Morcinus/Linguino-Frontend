// prettier-ignore
"use client"

import UnauthenticatedOnlyRoute from "components/layouts/authentication/UnauthenticatedOnlyRoute/UnauthenticatedOnlyRoute";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <UnauthenticatedOnlyRoute>
      <ContentContainer>{children}</ContentContainer>
    </UnauthenticatedOnlyRoute>
  );
};

export default Layout;
