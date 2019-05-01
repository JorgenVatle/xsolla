import { XsollaMerchantCredentials } from './Interfaces/Xsolla.interface';
import Axios, { AxiosInstance } from 'axios';

export default class XsollaClient {

    /**
     * Xsolla merchant credentials.
     */
    protected readonly credentials: XsollaMerchantCredentials;

    /**
     * REST client
     */
    protected readonly client: AxiosInstance;

    /**
     * Xsolla Client constructor
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
     * Merchant ID for the current client.
     */
    public get merchantId() {
        return this.credentials.merchantId;
    }

    /**
     * Client get() method.
     */
    public get get() {
        return this.client.get;
    }

    /**
     * Client put() method.
     */
    public get put() {
        return this.client.put;
    }

    /**
     * Client post() method.
     */
    public get post() {
        return this.client.post;
    }

    /**
     * Client request() method.
     */
    public get request() {
        return this.client.request;
    }

}