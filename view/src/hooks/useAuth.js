import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";
import { mainInstance } from "api";

const useAuth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const loginToken = Cookies.get("loginToken");

  useEffect(() => {
    if (loginToken) {
      mainInstance.defaults.headers.Authorization = loginToken;
      if (["/login", "/register"].includes(pathname)) navigate("/");
    } else {
      if (!["/login", "/register"].includes(pathname)) navigate("/login");
    }
  }, [loginToken]);
};

export default useAuth;
