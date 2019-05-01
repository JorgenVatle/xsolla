import { Create, Get, Update } from '../Interfaces/Project.interface';
import Collection from './Collection';

export default class ProjectCollection extends Collection {

    /**
     * Create a project.
     */
    public create(data: Create.input): Promise<Create.response> {
        return this.client.post(`/merchants/${data.merchant_id || this.client.merchantId}/projects`,{
            method: 'POST',
            data,
        }).then(({ data }) => data);
    }

    /**
     * Get a single project by ID.
     */
    public get(data: Get.input): Promise<Get.response> {
        return this.client.get(`/projects/${data.project_id}`)
            .then(({ data }) => data);
    }


    /**
     * Update a project.
     */
    public update(data: Update.input): Promise<Update.response> {
        return this.client.put(`/projects/${data.project_id}`, data)
            .then(({ data }) => data);
    }
}