import { XsollaMerchantCredentials, XsollaProjectCredentials } from './Xsolla.interface';

export default class Xsolla {

    /**
     * Xsolla merchant credentials.
     */
    private readonly credentials: XsollaMerchantCredentials;

    /**
     * Xsolla constructor
     */
    public constructor(credentials: XsollaMerchantCredentials) {
        this.credentials = credentials;
    }

}