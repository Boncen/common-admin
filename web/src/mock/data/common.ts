import { ResultEnum } from "#/enum";
import Mock from "mockjs";

const successResult = Mock.mock({
  status: ResultEnum.SUCCESS,
  message: "success",
});

const failResult = Mock.mock({
  status: ResultEnum.ERROR,
  message: "error",
});

export { successResult, failResult };
