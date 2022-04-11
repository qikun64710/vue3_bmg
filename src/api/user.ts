import api from './api'
import {IResponse,ILogin} from './type'

export class userApi{
    static login = (params: ILogin): Promise<IResponse> => {
        return api.post('user/login',params).then(res => res.data);
    };
}