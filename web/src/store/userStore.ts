import { UserInfo } from "#/entity";
import { StorageEnum } from "#/enum";
import { getItem, getStringItem, removeItem, setItem } from "@/utils/storage";
import { create } from "zustand";

type userStore = {
  userInfo: UserInfo;
  userToken: string | null;
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (userInfo: string) => void;
    clearUserInfoAndToken: () => void;
  };
};

const useUserStore = create<userStore>((set) => ({
  userInfo: getItem<UserInfo>(StorageEnum.User) ?? {} as UserInfo,
  userToken: getStringItem(StorageEnum.Token),
  actions: {
    setUserInfo: (userInfo: UserInfo) => {
      set({ userInfo });
      setItem(StorageEnum.User, userInfo);
    },
    setUserToken: (userToken: string) => {
      set({ userToken });
      setItem(StorageEnum.Token, userToken);
    },
    clearUserInfoAndToken() {
      set({ userInfo: {} as UserInfo, userToken: "" });
      removeItem(StorageEnum.User);
      removeItem(StorageEnum.Token);
    },
  },
}));

export const useUserInfo = () => useUserStore((state: any) => state.userInfo);
export const useUserToken = () => useUserStore((state: any) => state.userToken);
export const useUserPermission = () =>
  useUserStore((state: any) => {
    return state.userInfo?.permissions;
  }); // todo
export const useUserActions = () => useUserStore((state: any) => state.actions);
export const useIfUserLogin = () =>
  useUserStore(
    (state: any) =>
      state.userToken != null &&
      state.userToken !== "" &&
      state.userToken != "null"
  );
