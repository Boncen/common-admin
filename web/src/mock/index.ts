import Mock from "mockjs";
import data from "./data/list";
import {loginResult, userInfo, userList, roleList} from './data/user'
import {successResult} from './data/common'

export default function setupMock() {
  Mock.setup({
    timeout: "350-600",
  });

  Mock.mock("/api/data", "get", data);
  Mock.mock("/api/login", "post", loginResult);
  Mock.mock("/api/logout", "post", successResult);
  Mock.mock("/api/userinfo", "get", userInfo);
  Mock.mock("/api/userinfo", "put", successResult);
  
  Mock.mock("/api/users", "get", userList);
  Mock.mock("/api/roles", "get", roleList);
}
