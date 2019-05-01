import { XsollaMerchantCredentials } from './Interfaces/Xsolla.interface';
import ProjectCollection from './Collections/ProjectCollection';
import XsollaClient from './XsollaClient';

export default class Xsolla {

    /**
     * REST client
     */
    protected readonly client: XsollaClient;

    /**
     * Xsolla constructor
     */
    public constructor(credentials: XsollaMerchantCredentials) {
        this.client = new XsollaClient(credentials);
    }

    /**
     * Xsolla Project instance.
     */
    public get projects() {
        return new ProjectCollection(this.client);
    }

}