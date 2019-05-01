import XsollaClient from '../XsollaClient';

export type ModelData = any;

export default abstract class Model {

    /**
     * Xsolla Client
     */
    protected client: XsollaClient;

    /**
     * Model data.
     */
    protected data: ModelData;

    /**
     * Model constructor.
     */
    public constructor(data: ModelData, client: XsollaClient) {
        this.data = data;
        this.client = client;
    }

    /**
     * Update self with the given data.
     */
    protected renew(data: ModelData = {}) {
        this.data = { ...this.data, ...data };
        return this;
    }

}