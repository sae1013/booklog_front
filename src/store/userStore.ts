import { atom } from "recoil";

export const userNameState = atom({
  key: "username",
  default: "asdf",
});
