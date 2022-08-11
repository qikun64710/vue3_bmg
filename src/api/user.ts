import api from './api'
import {IResponse,ILogin} from './type'

export class userApi{
    static login = (params: ILogin): Promise<IResponse> => {
        return api({
            url:'user/login',
            params:params,
            method:'post'
        }).then(res => res.data);
    };
}