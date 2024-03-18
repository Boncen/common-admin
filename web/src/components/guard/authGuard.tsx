import { useIfUserLogin } from "@/store/userStore";
import PageMapper from "@/utils/page-mapper";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const isLogin = useIfUserLogin();
  return isLogin ? <>{children}</> : <Navigate to={PageMapper.Login} />;
}
