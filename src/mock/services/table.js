import Mock from "mockjs";
import { builder, formBuilder } from "../util";

const tableMockDataWorkspace = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "testk8s",
          type: "test",
          cluster: "1,1,2",

          comment: "haha",
          status: "active",
          nodesCount: "1",
          config: "ddd",
          createTime: "20210285",
          createdBy: "admin",
          updateTime: "202031520",
          updatedBy: "",
        },
        {
          id: 2,
          name: "tesdddtk8s",
          type: "test",
          cluster: "1,1,2",
          comment: "haha",
          status: "active",
          nodesCount: "1",
          config: "ddd",
          createTime: "20210285",
          createdBy: "admin",
          updateTime: "202031520",
          updatedBy: "",
        },
        {
          id: 3,
          name: "teshhhhdddtk8s",
          type: "test",
          cluster: "1,1,2",
          comment: "haha",
          status: "active",
          nodesCount: "1",
          config: "ddd",
          createTime: "20210285",
          createdBy: "admin",
          updateTime: "202031520",
          updatedBy: "",
        },
      ],
    },
  });
};

const tableMockDataNodes = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "testk8s",
          type: "test",
          cluster: "1,1,2",
          label: "haha",
          status: "active",
          cpulowerlimit: "1",
          cpuupperlimit: "ddd",
          createTime: "20210285",
          momerylowerlimit: "admin",
          memoryupperlimit: "202031520",
          pods: "",
        },
        {
          id: 2,
          name: "tesdddtk8s",
          type: "test",
          cluster: "1,1,2",
          label: "haha",
          status: "active",
          cpulowerlimit: "1",
          cpuupperlimit: "ddd",
          createTime: "20210285",
          momerylowerlimit: "admin",
          memoryupperlimit: "202031520",
          pods: "",
        },
        {
          id: 3,
          name: "teshhhhdddtk8s",
          type: "test",
          cluster: "1,1,2",
          label: "haha",
          status: "active",
          cpulowerlimit: "1",
          cpuupperlimit: "ddd",
          createTime: "20210285",
          momerylowerlimit: "admin",
          memoryupperlimit: "202031520",
          pods: "",
        },
      ],
    },
  });
};

const tableMockDataDetailSourceinfo = () => {
  return formBuilder({
    ret: 1,
    error: null,
    data: {
      id: 1,
      podCIDR: "10.244.0.0/24",
      address: [
        { id: "123123", name: "internalP:10.120.25.9" },
        { id: "gggg", name: "hostname:yl3438-jumpserver.novallocal" },
      ],
    },
  });
};

const mocknodesdetailSysteminfo = () => {
  return formBuilder({
    ret: 1,
    error: null,
    data: {
      scientId: "1asdadfsadfgdfdasdas",
      systemId: "testkdsfgdfsgdfs8s",
      rebootId: "tegdfsgdfsgdfgst",
      coreVersion: "1.3.3.1.123.12",
      systemView: "centos linux7",
      runtimeVersion: "docker://20.10.8",
      kubeletVersion: "1.3.3",
      kubeproxyVersion: "v1.7.2",
      os: "linux",
      frameWork: "amd64",
    },
  });
};

const mocknodesdetailAllocateinfo = () => {
  return formBuilder({
    ret: 1,
    error: null,
    data: {
      scientId: "1asdadfsadfgdfdasdas",
      systemId: "testkdsfgdfsgdfs8s",
      rebootId: "tegdfsgdfsgdfgst",
      coreVersion: "1.3.3.1.123.12",
      systemView: "centos linux7",
      runtimeVersion: "docker://20.10.8",
      kubeletVersion: "1.3.3",
      OS: "linux",
      frameWork: "amd64",
    },
  });
}; //图表格式

const tableMockNodesDetail = () => {
  return formBuilder({
    ret: 1,
    error: null,
    data: {
      name: "demo.novalocal",
      createTime: "2021-05-19 23:18:27",
      passTime: "2021-05-19 23:18:27",
      UUID: "c538f20d-06a1-4582-b8b6-7c44a8879c0e",
      label: [
        { name: "sdfsdfsdfsdf", id: "dsfdsfdsfds" },
        { name: "sdfsdfsdfsdfgdfssdf", id: "dsfdskhfdsfds" },
        { name: "sdfsdfskju;luihkldfsdf", id: "dsfdkjlsfkjldsfds" },
      ],
      note: "kubectl.kubernetes.io/last-applied-configuration",
    },
  });
}; //图表格式

const mocknodesdetailStatusinfo = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "testk8s",
          type: "test",
          status: "active",
          lastCheckTime: "2021-02-06",
          lastMoveTime: "2021-05-09",
          reason: "dddddddddd",
          information: "asdasdasdasdasd",
        },
        {
          id: 2,
          name: "tesdddtk8s",
          type: "test",
          status: "active",
          lastCheckTime: "2021-02-06",
          lastMoveTime: "2021-05-09",
          reason: "dddddddddd",
          information: "asdasdasdasdasd",
        },
        {
          id: 3,
          name: "teshhhhdddtk8s",
          type: "test",
          status: "active",
          lastCheckTime: "2021-02-06",
          lastMoveTime: "2021-05-09",
          reason: "dddddddddd",
          information: "asdasdasdasdasd",
        },
      ],
    },
  });
};

const mocknodesdetailPodsinfo = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "testk8s",
          namespace: "test",
          status: "active",
          label: "2021-02-06",
          node: "2021-05-09",
          restart: "dddddddddd",
          CPUrate: "30",
          memoryrate: "1.42g",
          createTime: "2021-05-07",
        },
        {
          id: 2,
          name: "tesdddtk8s",
          namespace: "test",
          status: "active",
          label: "2021-02-06",
          node: "2021-05-09",
          restart: "dddddddddd",
          CPUrate: "40",
          memoryrate: "1.42g",
          createTime: "2021-05-07",
        },
        {
          id: 3,
          name: "teshhhhdddtk8s",
          namespace: "test",
          status: "active",
          label: "2021-02-06",
          node: "2021-05-09",
          restart: "dddddddddd",
          CPUrate: "50",
          memoryrate: "1.42g",
          createTime: "2021-05-07",
        },
      ],
    },
  });
};

const mocknodesdetailActiveinfo = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          name: "testk8s",
          type: "test",
          firstTime: "2021-08-02",
          lastMoveTime: "2017-07-09",
          num: "333",
          childObject: "fff",
          source: "dddddddddd",
          information: "asdasdasdasdasd",
        },
        {
          id: 2,
          name: "tesdddtk8s",
          type: "test",
          status: "active",
          firstTime: "2021-08-02",
          lastMoveTime: "2017-07-09",
          num: "333",
          childObject: "fff",
          source: "dddddddddd",
          information: "asdasdasdasdasd",
        },
        {
          id: 3,
          name: "teshhhhdddtk8s",
          type: "test",
          status: "active",
          firstTime: "2021-08-02",
          lastMoveTime: "2017-07-09",
          num: "333",
          childObject: "fff",
          source: "dddddddddd",
          information: "asdasdasdasdasd",
        },
      ],
    },
  });
};
const mockgetk8sgeneralevent = () => {
  return builder({
    ret: 3,
    error: null,
    data: {
      skip: 0,
      total: 3,
      limit: 50,
      autoCount: true,
      orderbys: [],
      data: [
        {
          id: 1,
          namespaces: "testk8s",
          type: "test",
          lastModifyed: "2021-08-02",
          eventInfo: "333",
          object: "fff",
          source: "dddddddddd",
          reason: "asdasdasdasdasd",
        },
        {
          id: 2,
          namespaces: "tesdddtk8s",
          type: "test",
          status: "active",
          lastModifyed: "2021-08-02",
          eventInfo: "333",
          object: "fff",
          source: "dddddddddd",
          reason: "asdasdasdasdasd",
        },
        {
          id: 3,
          namespaces: "teshhhhdddtk8s",
          type: "test",
          status: "active",
          lastModifyed: "2021-08-02",
          eventInfo: "333",
          object: "fff",
          source: "dddddddddd",
          reason: "asdasdasdasdasd",
        },
      ],
    },
  });
};

Mock.mock(/\/mocktabledata/, "get", tableMockDataWorkspace);
Mock.mock(/\/mocknodesdata/, "get", tableMockDataNodes);
Mock.mock(/\/mocknodesdetailbasicinfo/, "get", tableMockNodesDetail);
Mock.mock(/\/mocknodesdetailsourceinfo/, "get", tableMockDataDetailSourceinfo);
Mock.mock(/\/mocknodesdetailsysteminfo/, "get", mocknodesdetailSysteminfo);
Mock.mock(/\/mocknodesdetailallocateinfo/, "get", mocknodesdetailAllocateinfo);
Mock.mock(/\/mocknodesdetailstatusinfo/, "get", mocknodesdetailStatusinfo);
Mock.mock(/\/mocknodesdetailpodsinfo/, "get", mocknodesdetailPodsinfo);
Mock.mock(/\/mocknodesdetailactiveinfo/, "get", mocknodesdetailActiveinfo);
Mock.mock(/\/mockgetk8sgeneralevent/, "get", mockgetk8sgeneralevent);
