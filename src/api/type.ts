export interface IResponse{
    code:string | number,
    result:any,
    message:string
}

/**用户登录 */
export interface ILogin{
    /**用户名 */
    name:string,
    // 用户密码
    password:string
}
// 文件上传
export interface UploadFile{
    // 文件
    file:any,
    // 类型 type  
    password?:string | number
}
/**文章相关 */
// 添加文章
export interface addArticle{
    title:string,
    previewImage?:string,
    description?:string,
    content:string

}