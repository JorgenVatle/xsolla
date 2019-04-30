export interface XsollaMerchantCredentials {

    /**
     * Xsolla merchant ID
     */
    merchantId: string | number;

    /**
     * Xsolla Merchant API Key
     */
    apiKey: string;

}

export interface XsollaProjectCredentials {

    /**
     * Xsolla Merchant ID
     */
    merchantId: string | number;

    /**
     * Xsolla Project ID
     */
    projectId: string;

    /**
     * Xsolla Project Secret
     */
    secret: string;

}