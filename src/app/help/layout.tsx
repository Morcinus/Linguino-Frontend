"use client"

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Layout;
