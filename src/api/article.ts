import api from './api'
import {IResponse,addArticle} from './type'

export class articleApi{
    static addArticle = (params:addArticle): Promise<IResponse> => {
        return api.post('article/createArticle',params).then(res => res.data);
    };
}