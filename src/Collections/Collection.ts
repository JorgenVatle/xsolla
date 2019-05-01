import XsollaClient from '../XsollaClient';
import Model, { ModelData } from '../Models/Model';

export default abstract class Collection<T extends Model> {

    /**
     * Model this collection is responsible for.
     */
    protected abstract model: new(data: ModelData, client: XsollaClient) => T;

    /**
     * Xsolla Client
     */
    protected client: XsollaClient;

    /**
     * Collection constructor.
     */
    public constructor(client: XsollaClient) {
        this.client = client;
    }

    /**
     * Create model instance using the given data.
     */
    protected createModel(data: ModelData) {
        return new this.model(data, this.client);
    }

    /**
     * Create list of models.
     */
    protected createModelList(data: ModelData[]) {
        return data.map((data) => this.createModel(data));
    }

}