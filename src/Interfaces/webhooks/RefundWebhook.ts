import PaymentWebhook from './PaymentWebhook';
import { CustomParameters } from '../Xsolla.interface';

/**
 * Refund webhook
 *
 * @link https://developers.xsolla.com/api/v2/getting-started/#api_webhooks_refund
 */
export default interface RefundWebhook {

    notification_type: 'refund';

    refund_details: {
        code: number;
        reason: string;
        author: string;
    };

    purchase: PaymentWebhook['purchase'];
    user: PaymentWebhook['user'];
    transaction: PaymentWebhook['transaction'];
    payment_details: PaymentWebhook['payment_details'];
    custom_parameters: CustomParameters;
}