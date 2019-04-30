import { XsollaMerchantCredentials } from './Xsolla.interface';
import Axios, { AxiosInstance } from 'axios';
import Project from './Project';

export default class Xsolla {

    /**
     * Xsolla merchant credentials.
     */
    protected readonly credentials: XsollaMerchantCredentials;

    /**
     * REST client
     */
    protected readonly client: AxiosInstance;

    /**
     * Xsolla constructor
     */
    public constructor(credentials: XsollaMerchantCredentials) {
        this.credentials = credentials;

        this.client = Axios.create({
            baseURL: `https://api.xsolla.com/merchant/v2/`,
            auth: {
                username: credentials.merchantId.toString(),
                password: credentials.apiKey,
            }
        });
    }

    /**
     * Xsolla Project instance.
     */
    public get project() {
        return new Project(this.credentials);
    }

}