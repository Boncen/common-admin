import { Result } from "#/api";
import { Permission, Role, SystemUser, UserInfo } from "#/entity";
import { PermissionType, ResultEnum, UserStateEnum } from "#/enum";
const permissionList: Permission[] = [
  {
    id: "1",
    parentId: "",
    label: "common.homePage",
    name: "common.homePage",
    icon: "mdi-light:home",
    type: PermissionType.MENU,
    route: "/",
    component: "/dashboard.tsx",
  },
  {
    id: "5733704222120995",
    parentId: "",
    label: "sample",
    name: "sample",
    hide: true,
    icon: "ph:eyedropper-sample",
    type: PermissionType.CATALOGUE,
    route: "sample",
    children: [
      {
        id: "9884486809510480",
        parentId: "5733704222120995",
        label: "s1",
        name: "s1",
        type: PermissionType.MENU,
        route: "s1",
        component: "/sample/s1/index.tsx",
        frameSrc: "",
      },
      {
        id: "9299640886731819",
        parentId: "5733704222120995",
        label: "s2",
        name: "s2",
        type: PermissionType.MENU,
        route: "s2",
        component: "/sample/s2/index.tsx",
        frameSrc: "",
      },
    ],
  },
  {
    id: "5733704222120999",
    parentId: "",
    label: "sys.menu.system.index",
    name: "sys.menu.system.index",
    icon: "ant-design:setting-twotone",
    type: PermissionType.CATALOGUE,
    route: "sys",
    children: [
      {
        id: "9884486809510482",
        parentId: "5733704222120999",
        label: "个人信息",
        name: "个人信息",
        type: PermissionType.MENU,
        hide: true,
        route: "my",
        component: "/sys/my.tsx",
      },
      {
        id: "9884486809510484",
        parentId: "5733704222120999",
        label: "sys.menu.userManager",
        name: "sys.menu.userManager",
        type: PermissionType.MENU,
        route: "users",
        component: "/sys/user/user.tsx",
      },
      {
        id: "9884486809510485",
        parentId: "5733704222120999",
        label: "sys.menu.roleManager",
        name: "sys.menu.roleManager",
        type: PermissionType.MENU,
        route: "roles",
        component: "/sys/role/index.tsx",
      },
    ],
  },
];

const loginResult: Result<{ token: string }> = {
  status: ResultEnum.SUCCESS,
  message: "ok",
  data: {
    token: "asdasdasdasdasdasdasd",
  },
};

const userInfo: Result<UserInfo> = {
  status: ResultEnum.SUCCESS,
  message: "ok",
  data: {
    id: "1",
    email: "boncen@outlook.com",
    username: "Boncen",
    avatar: "https://img2.imgtp.com/2024/03/07/1Dusya6w.webp",
    role: ["admin"],
    permissions: permissionList,
  },
};

const userList: Result<SystemUser> = {
  status: ResultEnum.SUCCESS,
  message: "ok",
  // @ts-expect-error using mock
  "data|15-40": [
    {
      "id|+1": 1,
      "key|+1": 1,
      name: "@cname",
      email: "@email",
      mobile: /1[35789]\d{9}/,
      state: UserStateEnum.NORMAL,
      remark: "@sentence",
    },
  ],
};

const roleList: Result<Role> = {
  status: ResultEnum.SUCCESS,
  message: "ok",
  // @ts-expect-error using mock
  data: [
    {
      id: 1,
      key: 1,
      name: "管理员",
      label: "管理员",
      desc: "管理员",
      permission: [],
    },
    {
      id: 2,
      key: 2,
      name: "财务总监",
      label: "财务总监",
      desc: "财务总监",
      permission: [],
    },
  ],
};

export { userInfo, loginResult, userList, roleList };
