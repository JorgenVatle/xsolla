interface ValueObject<T = string> {
    value: T,
}

/**
 * Required User properties.
 */
interface UserRequired {
    /**
     * User ID
     */
    id: ValueObject;
}

interface UserOptional {
    /**
     * User screen name.
     */
    name: ValueObject;

    /**
     * User email address.
     */
    email: ValueObject;

    /**
     * User phone number.
     */
    phone: ValueObject;

    /**
     * User country code.
     * Two-letter uppercase country code. (ISO 3166-1)
     */
    country: UserCountry;

    /**
     * User attributes for filtering the item list, represented as a valid JSON set of key-value pairs.
     */
    attributes: UserAttributes;

    /**
     * User's Steam ID
     */
    steam_id: ValueObject;

    /**
     * Unique tracking ID (used in marketing campaigns).
     */
    tracking_id: ValueObject;

    /**
     * Parameter that uniquely identifies the user and is known to the user (email, screen name, etc).
     * Allows the user to make purchases outside the game store (e.g., via cash kiosks).
     */
    public_id: ValueObject;

    /**
     * Traffic attributes.
     */
    utm: UserUTM;
}

interface UserLegal {
    /**
     * Whether the user is a legal entity.
     */
    is_legal: boolean;

    /**
     * Object with legal entity details. Object and all its parameters are required if user.is_legal is ‘true’.
     */
    legal: {
        /**
         * Full legal name.
         */
        name: string;

        /**
         * Full legal address
         */
        address: string;

        /**
         * Individual taxpayer identifier.
         */
        vat_id: string;

        /**
         * Country code of incorporation.
         * Two-letter uppercase country code. (ISO 3166-1)
         */
        country: string;
    }
}

interface UserCountry extends ValueObject {

    /**
     * Whether or not user can change the country on payment UI. 'false' by default.
     */
    allow_modify: boolean;

}

interface UserAttributes {
    [key: string]: string;
}

interface UserUTM {
    /**
     * Traffic source.
     */
    utm_source: string;

    /**
     * Traffic channel (contextual ads, media ads, email lists, etc.).
     */
    utm_medium: string;

    /**
     * Campaign title, transliterated or translated to English.
     */
    utm_campaign: string;

    /**
     * Campaign keyword. If set, statistics will be based on the keywords used for ad targeting rather than on specific
     * search queries. In Google Analytics, the specified 'utm_term' is part of the general search terms report.
     */
    utm_term: string;

    /**
     * Campaign content.
     */
    utm_content: string;
}

export type User = UserRequired & Partial<UserOptional> & UserLegal;
