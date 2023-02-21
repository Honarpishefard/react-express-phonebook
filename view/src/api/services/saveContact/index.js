import { mainInstance } from "./../../constants";

export const saveContactService = (data) => {
  return mainInstance.post("/newContact", data);
};