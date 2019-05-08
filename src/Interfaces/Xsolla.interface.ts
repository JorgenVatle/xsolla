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

/**
 * DRM platform used to distribute the game. Can be 'steam', 'playstation', 'xbox', 'uplay', 'origin', or 'drmfree'.
 * Make sure to have configured the required DRM platforms in your Publisher Account. If not passed in the token,
 * will be chosen by the user in the payment UI.
 */
export type DRM = 'steam' | 'playstation' | 'xbox' | 'uplay' | 'origin' | 'drmfree';