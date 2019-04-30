import { AxiosPromise } from 'axios';
import { Create, Get } from './Project.interface';
import Xsolla from './Xsolla';

export default class Project extends Xsolla {

    /**
     * Create a project.
     */
    public create(data: Create.input): AxiosPromise<Create.response> {
        return this.client.post(`/merchants/${data.merchant_id || this.credentials.merchantId}/projects`,{
            method: 'POST',
            data,
        })
    }

    /**
     * Get a single project by ID.
     */
    public get(data: Get.input): AxiosPromise<Get.response> {
        return this.client.get(`/projects/${data.project_id}`);
    }
}