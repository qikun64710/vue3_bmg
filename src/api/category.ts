import api from './api'
import { IResponse } from './type'
export class CategoryApi {
    static selectCaAll = ():Promise<IResponse> => {
        return api.post('category/list').then(res => res.data)
    }
}
