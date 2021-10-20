import request from "./request";

export const getClusters = (params) => request.get("/mocktabledata", params);

//获取授权管理列表
export const getAuthorizManagers = (params) => request.get("/mockauthmanagertabledata", params);

//获取授权RBAC列表
export const getAuthorizRBACs = (params) => request.get("mockauthrbactabledata", params);

//获取网域加速列表
export const getDomains = (params) => request.get("mockdomaintabledata", params);

//获取网关列表
export const getGateways = (params) => request.get("mockgatewaytabledata", params);

export const getNodes = (params) => request.get("/mocknodesdata", params);
//获取nodes信息

export const getNodesDetail = (params) => request.get("/mocknodesdetailbasicinfo", params);
//获取nodes详情

export const getNodesDetailSourceInfo = (params) => request.get("/mocknodesdetailsourceinfo", params);
//获取nodes 资源信息

export const getNodesDetailSystemInfo = (params) => request.get("/mocknodesdetailsysteminfo", params);
//获取nodes 系统信息

export const getNodesDetailAllocateInfo = (params) => request.get("/mocknodesdetailallocateinfo", params);
//获取nodes 分配信息

export const getNodesDetailStatusInfo = (params) => request.get("/mocknodesdetailstatusinfo", params);
//获取nodes 状态信息

export const getNodesDetailPodsInfo = (params) => request.get("/mocknodesdetailpodsinfo", params);
//获取nodes Pods信息

export const getNodesDetailActiveInfo = (params) => request.get("/mocknodesdetailactiveinfo", params);
//获取nodes 活动信息

export const getSessionList = (params) => request.get("/session", params);
// session

export const getRecordList = (params) => request.get("/record", params);
// session record

export const getK8SGeneralEvent = (params) => request.get("/mockgetk8sgeneralevent", params);
//获取 集群详情中 事件信息

export const mockLogin = params => request.post('/mock/system/user/login', params);
//用户登录
