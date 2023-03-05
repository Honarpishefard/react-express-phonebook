import { mainInstance } from "api";

export const saveContactService = (data) => {
  return mainInstance.post("/newContact", data);
};
