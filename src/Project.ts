import { AxiosPromise } from 'axios';
import { Create } from './Project.interface';
import Xsolla from './Xsolla';

export default class Project extends Xsolla {

    /**
     * Create a project.
     */
    public create(data: Create.input): AxiosPromise<Create.response> {
        return this.client.post(`/merchants/${this.credentials.merchantId}/projects`,{
            method: 'POST',
            data,
        })
    }
}