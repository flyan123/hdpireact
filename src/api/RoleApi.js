import axios from "../pages/utile/request.js";

// 角色列表
export const $list = async()=>{
    let {data}=await axios.get('Role/List')
    return data
}

// 添加角色
export const $add = async (params)=>{
    let {data} = await axios.post('Role/Add',params)
    return data 
}