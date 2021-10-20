import Mock from "mockjs";
import { builder, getBody, formBuilder } from "../util";

const username = ["admin", "super"];
// 强硬要求 ant.design 相同密码
// '21232f297a57a5a743894a0e4a801fc3',
const password = ["8914de686ab28dc22f30d3d8e107ff6c", "21232f297a57a5a743894a0e4a801fc3"]; // admin, ant.design

const mockLogin = (options) => {
  const body = getBody(options);
  console.log("mock: body", body);
  return formBuilder({
    ret: 1,
    error: null,
    data: {
      id: 1,
      currentAuthority: "ADMIN",
      token: "asdasdrgxfghnjyfumxdfbgthtfhtfgh23423gfhsrtyh",
    },
  });
};

const logout = () => {
  return builder({}, "[测试接口] 注销成功");
};

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock("@integer(10000, 99999)") });
};

const twofactor = () => {
  return builder({ stepCode: Mock.mock("@integer(0, 1)") });
};

Mock.mock(/\/login/, "post", mockLogin);
Mock.mock(/\/auth\/logout/, "post", logout);
Mock.mock(/\/account\/sms/, "post", smsCaptcha);
Mock.mock(/\/auth\/2step-code/, "post", twofactor);
