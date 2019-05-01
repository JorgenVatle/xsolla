import { Create, Get } from '../Interfaces/Project.interface';
import Collection from './Collection';
import Project from '../Models/Project';

export default class ProjectCollection extends Collection<Project> {

    /**
     * Model this collection is responsible for.
     */
    protected model = Project;

    /**
     * Create a project.
     */
    public create(data: Create.input): Promise<Project> {
        return this.client.post(`/merchants/${data.merchant_id || this.client.merchantId}/projects`,{
            method: 'POST',
            data,
        }).then(({ data }) => this.createModel(data));
    }

    /**
     * Get a single project by ID.
     */
    public get(data: Get.input): Promise<Project> {
        return this.client.get(`/projects/${data.project_id}`)
            .then(({ data }) => this.createModel(data));
    }

}