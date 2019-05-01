import Model from './Model';
import { Update } from '../Interfaces/Project.interface';

export default class Project extends Model {

    /**
     * Update a project.
     */
    public update(data: Update.input): Promise<Project> {
        return this.client.put(`/projects/${data.project_id}`, data)
            .then(({ data }) => this.renew(data));
    }

}