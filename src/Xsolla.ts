import { XsollaMerchantCredentials } from './Interfaces/Xsolla.interface';
import ProjectCollection from './Collections/ProjectCollection';
import XsollaClient from './XsollaClient';

export default class Xsolla {

    /**
     * Xsolla merchant credentials.
     */
    protected readonly credentials: XsollaMerchantCredentials;

    /**
     * REST client
     */
    protected readonly client: XsollaClient;

    /**
     * Xsolla constructor
     */
    public constructor(credentials: XsollaMerchantCredentials) {
        this.credentials = credentials;
        this.client = new XsollaClient(credentials);
    }

    /**
     * Xsolla Project instance.
     */
    public get projects() {
        return new ProjectCollection(this.credentials);
    }

}