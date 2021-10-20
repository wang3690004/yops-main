//集群列表
import request from '@/apis/request';

export const getClustersList = () => request.get('/clusters');
//获取用户信息