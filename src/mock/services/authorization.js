import Mock from "mockjs";
import { builder } from "../util";

const authManagerTableMockData = () => {
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
          name: "上海集群授权",
          type: "test",
          state: "正常",
          cluster: "1",
          user: "5",
          userGroup: "10",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 2,
          name: "厦门集群授权",
          type: "test",
          state: "正常",
          cluster: "2",
          user: "5",
          userGroup: "10",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 3,
          name: "福州集群授权",
          type: "test",
          state: "正常",
          cluster: "3",
          user: "5",
          userGroup: "10",
          createTime: "2021-07-06 15:24:09",
        },
      ],
    },
  });
};

const rbacTableMockData = () => {
  return builder({
    ret: 11,
    error: null,
    data: {
      skip: 0,
      total: 11,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "RBAC1",
          type: "test",
          state: "正常",
          cluster: "1",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 2,
          name: "RBAC2",
          type: "test",
          state: "正常",
          cluster: "2",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 3,
          name: "RBAC3",
          type: "test",
          state: "正常",
          cluster: "3",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 4,
          name: "RBAC4",
          type: "test",
          state: "正常",
          cluster: "4",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 5,
          name: "RBAC5",
          type: "test",
          state: "正常",
          cluster: "5",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 6,
          name: "RBAC6",
          type: "test",
          state: "正常",
          cluster: "6",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 7,
          name: "RBAC7",
          type: "test",
          state: "正常",
          cluster: "7",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 8,
          name: "RBAC8",
          type: "test",
          state: "正常",
          cluster: "8",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 9,
          name: "RBAC9",
          type: "test",
          state: "正常",
          cluster: "9",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 10,
          name: "RBAC10",
          type: "test",
          state: "正常",
          cluster: "10",
          createTime: "2021-07-06 15:24:09",
        },
        {
          id: 11,
          name: "RBAC11",
          type: "test",
          state: "正常",
          cluster: "11",
          createTime: "2021-07-06 15:24:09",
        }
      ],
    },
  });
};

Mock.mock(/\/mockauthmanagertabledata/, "get", authManagerTableMockData);
Mock.mock(/\/mockauthrbactabledata/, "get", rbacTableMockData);

