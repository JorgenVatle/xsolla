import { XsollaMerchantCredentials } from './Interfaces/Xsolla.interface';
import ProjectCollection from './Collections/ProjectCollection';
import XsollaClient from './XsollaClient';
import UserValidationWebhook from './Interfaces/webhooks/UserValidationWebhook';
import RefundWebhook from './Interfaces/webhooks/RefundWebhook';
import PaymentWebhook from './Interfaces/webhooks/PaymentWebhook';

export default class Xsolla {

    /**
     * REST client
     */
    protected readonly client: XsollaClient;

    /**
     * Xsolla constructor
     */
    public constructor(credentials: XsollaMerchantCredentials) {
        this.client = new XsollaClient(credentials);
    }

    /**
     * Xsolla Project instance.
     */
    public get projects() {
        return new ProjectCollection(this.client);
    }

}

export {
    PaymentWebhook,
    RefundWebhook,
    UserValidationWebhook,
}