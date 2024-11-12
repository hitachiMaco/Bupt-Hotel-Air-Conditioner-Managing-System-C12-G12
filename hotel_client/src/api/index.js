import { get, post } from "./api";

//判断管理员是否登录成功
export const getLoginStatus = (params) => post(`admin/login/status`, params);