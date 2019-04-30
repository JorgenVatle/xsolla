import { XsollaMerchantCredentials } from './Xsolla.interface';
import Axios, { AxiosInstance } from 'axios';

export default class Xsolla {

    /**
     * Xsolla merchant credentials.
     */
    private readonly credentials: XsollaMerchantCredentials;

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
                username: credentials.merchantId,
                password: credentials.apiKey,
            }
        });
    }

}