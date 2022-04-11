export interface IResponse{
    code:string | number,
    data:any,
    msg:string
}

/**用户登录 */
export interface ILogin{
    /**用户名 */
    name:string,
    // 用户密码
    password:string
}