import request from "../utils/request";

// 登录
export const loginReq = (userInfo) => {
  return request({
    url: "/login",
    params: userInfo,
    method: "post",
  });
};
// 获取所有订单信息

