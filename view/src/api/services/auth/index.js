import { mainInstance } from "api";

export const registerService = (data) => {
  return mainInstance.post("/register", data);
};

export const loginService = (data) => {
  return mainInstance.post("/login", data);
};
