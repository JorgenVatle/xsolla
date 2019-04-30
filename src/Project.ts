import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Create } from './Project.interface';

export default class Project {

    /**
     * REST client.
     */
    protected client: AxiosInstance;

    /**
     * Xsolla project constructor.
     */
    public constructor(client: AxiosInstance) {
        this.client = Axios.create({
            ...client.defaults,
            baseURL: client.defaults.baseURL + 'projects'
        });
    }

    /**
     * Create a project.
     */
    public create(data: Create.input): AxiosPromise<Create.response> {
        return this.client.request({
            method: 'POST',
            data,
        })
    }
}