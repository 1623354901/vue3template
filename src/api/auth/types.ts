// 登录请求参数
export interface LoginData{
  // 用户名
  username:string;
  // 密码
  password:string
}
// 登录响应
export interface LoginResult{
  // token
  accessToken?:string;
  // 过期时间
  expires?:number;
  refreshToken?: string;
  tokenType?: string;
}