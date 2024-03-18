import client from "../apiClient";

const login = (data: any) => client.post({ url: "/login", data });
const logout = () => client.post({url: "/logout"})

const getUserInfo = ()=> client.get({url:'/userinfo'})
const updateUserInfo = ()=> client.put({url: '/userinfo'})
const getUserList = (data: any)=> client.get({url:'/users', data})
const getRoleList = (data: any)=> client.get({url:'/roles', data})


export { login,logout,getUserInfo,updateUserInfo, getUserList,getRoleList };
