import api from './api'
import { IResponse } from './type'
export class categoryApi {
    static selectCaAll = ():Promise<IResponse> => {
        return api.post('category/findAllCategory').then(res => res.data)
    }
}