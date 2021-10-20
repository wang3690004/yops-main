import request from './request';

export const login = params => request.post('/system/user/login', params);
//用户登录

export const getInfo = () => request.get('/staff/current');
//获取用户信息

export const logout = () => request.post('/logout');
//用户登出

export const isEnable = () => request.get('/ldap/enable');
//ldap是否允许

export const current = () => request.post('/staff/current');
//获取当前成员信息