import XsollaClient from '../XsollaClient';

export default abstract class Collection {

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