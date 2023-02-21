import React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("loginToken")) {
      navigate("/login");
      toast.info("please login first!", {
        toastId: "info",
      });
    }
  }, [Cookies]);
  
  return <div>Save your contacts here</div>;
};