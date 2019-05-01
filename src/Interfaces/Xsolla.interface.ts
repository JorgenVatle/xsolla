export interface XsollaMerchantCredentials {

    /**
     * Xsolla merchant ID
     */
    merchantId: XsollaID;

    /**
     * Xsolla Merchant API Key
     */
    apiKey: string;

}

export interface XsollaProjectCredentials {

    /**
     * Xsolla Merchant ID
     */
    merchantId: XsollaID;

    /**
     * Xsolla Project ID
     */
    projectId: XsollaID;

    /**
     * Xsolla Project Secret
     */
    secret: string;

}

/**
 * Type used for Xsolla IDs
 */
export type XsollaID = number;