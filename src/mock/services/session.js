import Mock from "mockjs";
import { builder } from "../util";

const SessionList = () => {
  let data = [];
  for (let i = 0; i < 51; i++) {
    data.push({
      id: i + 1,
      username: "吴楷滨",
      instance: "rtn-router-cn-shenzhen-staing-ali-0",
      systemUser: "user",
      address: "10.119.4.36",
      protocol: "ssh",
      loginFrom: "Web Terminal",
      commandCount: 46,
      startTime: 1632706363000,
      runTime: 11.0
    });
  }

  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 51,
      limit: 20,
      autoCount: true,
      orderbys: [],
      data: data
    }
  });
};

const RecordList = () => {
  let data = [];
  for (let i = 0; i < 51; i++) {
    data.push({
      id: i + 1,
      command: 'curl 127.0.0.1:9297/v1/entries',
      riskLevel: '普通',
      username: "吴楷滨" + (i + 1).toString(),
      systemUser: "user",
      instance: "rtn-router-cn-shenzhen-staing-ali-0",
      addTime: 1632706363000,
      detail: '{"code": 200, "list": [1, 2, 3]}'
    });
  }

  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 51,
      limit: 20,
      autoCount: true,
      orderbys: [],
      data: data
    }
  });
};
Mock.mock(/\/record/, "get", RecordList);
Mock.mock(/\/session/, "get", SessionList);
