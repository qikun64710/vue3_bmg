import api from './api'
import { UploadFile,IResponse } from './type'

export class commonApi{
    static uploadimg = (params: any): Promise<IResponse> => {
        return api.post('uploadimg',params).then(res => res.data);
    };
}