import Model from './Model';
import { CreateToken, Get, Update } from '../Interfaces/Project.interface';

interface Project {
    data: Get.response;
}

class Project extends Model {

    /**
     * Update a project.
     */
    public update(data: Update.input): Promise<Project> {
        return this.client.put(`/projects/${data.project_id}`, data)
            .then(({ data }) => this.renew(data));
    }

    /**
     * Create a payment token for the current project.
     */
    public createPaymentToken(data: CreateToken.input): Promise<CreateToken.response> {
        if (!data.settings) {
            data.settings = {};
        }

        data.settings.project_id = this.data.project_id;

        return this.client.post(`/merchants/${this.client.merchantId}/token`)
            .then(({ data }) => data);
    }
}

export default Project;