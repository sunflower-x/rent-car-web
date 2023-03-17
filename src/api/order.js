import request from "../utils/request";


// 获取所有订单信息
export const getAllOrderInfo=()=>{
    return request({
        url: "/getAllOrderInfo",
        method: "get",
    })
}
