interface ValueObject<T = string> {
    value: T,
}

interface UserRequired {
    id: ValueObject;
}

interface UserOptional {
    name: ValueObject;
    email: ValueObject;
    phone: ValueObject;
    country: UserCountry;
    attributes: UserAttributes;
    steam_id: ValueObject;
    tracking_id: ValueObject;
    public_id: ValueObject;
    utm: UserUTM;
}

interface UserLegal {
    is_legal: boolean;
    legal: {
        name: string;
        address: string;
        vat_id: string;
        country: string;
    }
}

interface UserCountry extends ValueObject {
    allow_modify: boolean;
}

interface UserAttributes {
    [key: string]: string;
}

interface UserUTM {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
}

export type User = UserRequired & Partial<UserOptional> & UserLegal;
