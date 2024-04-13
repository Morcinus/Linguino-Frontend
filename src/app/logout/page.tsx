// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";
import { useRouter } from "next/navigation";

export interface ILogoutPage {}

const LogoutPage: React.FC<ILogoutPage> = () => {
  const {logout} = useAuth();
  const router = useRouter();

  logout();
  router.push("/login");

  return <></>;
};

export default LogoutPage;
