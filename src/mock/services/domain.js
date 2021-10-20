import Mock from "mockjs";
import { builder } from "../util";

const domainTableMockData = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit:50,
      autoCount:true,
      orderbys:[],
      data: [
        {
          id: 1,
          name: "网域1",
          type: "test",
          cluster: "1",
          gateway: "网关1",
          note: "aaaaaTestaaaaaa",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 2,
          name: "网域2",
          type: "test",
          cluster: "2",
          gateway: "网关2",
          note: "bbbbbTestbbbbbb",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 3,
          name: "网域3",
          type: "test",
          cluster: "3",
          gateway: "网关3",
          note: "cccccTestcccccc",
          createTime: "2021-07-06 15:24:09",
        },
      ],
    },
  });
};

const gatewayTableMockData = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit:50,
      autoCount:true,
      orderbys:[],
      data: [
        {
          id: 1,
          name: "ops_vpc_ap-southeast-1_jms_gateway_qa",
          type: "test",
          ip: "120.25.199.219",
          port: "2221",
          protocol: "ssh",
          username: "yealink",
          remark: "yealink",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 2,
          name: "ops_vpc_ap-southeast-2_jms_gateway_qa",
          type: "test",
          ip: "120.25.199.219",
          port: "2222",
          protocol: "ssh",
          username: "yealink",
          remark: "yealink",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 3,
          name: "ops_vpc_ap-southeast-3_jms_gateway_qa",
          type: "test",
          ip: "120.25.199.219",
          port: "2223",
          protocol: "ssh",
          username: "yealink",
          remark: "yealink",
          createTime: "2021-07-06 15:24:09",
        },
      ],
    },
  });
};

Mock.mock(/\/mockdomaintabledata/, "get", domainTableMockData);
Mock.mock(/\/mockgatewaytabledata/, "get", gatewayTableMockData);

