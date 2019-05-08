interface User {
    id: string;
    ip: string;
    phone: string;
    email: string;
    name: string;
    country: string;
}

/**
 * User validation webhook.
 *
 * @link https://developers.xsolla.com/api/v2/getting-started/#api_webhooks_user_validation
 */
export default interface UserValidationWebhook {
    notification_type: 'user_validation';
    user: Pick<User, 'id'> & Partial<User>;
}