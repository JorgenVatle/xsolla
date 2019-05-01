import XsollaClient from '../XsollaClient';

export default abstract class Model {

    /**
     * Xsolla Client
     */
    protected client: XsollaClient;

    /**
     * Model data.
     */
    protected data: any;

    /**
     * Model constructor.
     */
    public constructor(data: any, client: XsollaClient) {
        this.data = data;
        this.client = client;
    }

    /**
     * Update self with the given data.
     */
    protected renew(data: any = {}) {
        this.data = { ...this.data, ...data };
        return this;
    }

}