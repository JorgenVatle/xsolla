import XsollaClient from '../XsollaClient';
import Model from '../Models/Model';

export default abstract class Collection {

    /**
     * Model this collection is responsible for.
     */
    protected abstract model: Model;

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


}