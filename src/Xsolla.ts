import { XsollaMerchantCredentials } from './Xsolla.interface';
import Axios, { AxiosInstance } from 'axios';

export default class Xsolla {

    /**
     * Xsolla merchant credentials.
     */
    protected readonly merchantId: XsollaMerchantCredentials['merchantId'];

    /**
     * REST client
     */
    protected readonly client: AxiosInstance;

    /**
     * Xsolla constructor
     */
    public constructor({ merchantId, apiKey }: XsollaMerchantCredentials) {
        this.merchantId = merchantId;

        this.client = Axios.create({
            baseURL: `https://api.xsolla.com/merchant/v2/`,
            auth: {
                username: merchantId,
                password: apiKey,
            }
        });
    }

}