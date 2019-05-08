import UserValidationWebhook from './UserValidationWebhook';
import { CurrencyAndAmount, CustomParameters, DRM } from '../Xsolla.interface';

/**
 * Payment webhook
 *
 * @link https://developers.xsolla.com/api/v2/getting-started/#api_webhooks_payment
 */
export default interface PaymentWebhook {

    notification_type: 'payment';

    purchase?: Partial<{

        virtual_currency: {
            name: string;
            sku: string;
            quantity: number;
            currency: string;
            amount: number;
        }

        checkout: CurrencyAndAmount;

        subscription: {
            plan_id: string;
            subscription_id: string;
            tags: string[];
            date_create: string;
            date_next_charge: string;
            currency: string;
            amount: number;
        }

        virtual_items: CurrencyAndAmount & {
            items: {
                sku: string;
                amount: number;
            }[]
        }

        pin_codes: {
            digital_content: string;
            drm: DRM;
            currency: string;
            amount: number;
            upgrade: {
                currency: string;
                amount: number;
                digital_content_from: {
                    digital_content: string;
                    DRM: DRM,
                },
                digital_content_to: {
                    digital_content: string;
                    DRM: DRM,
                }
            }[]
        }[];

        gift: {
            giver_id: string;
            receiver_id: string;
            receiver_email: string;
            message: string;
            hide_giver_from_receiver: string;
            total: {
                currency: string;
                amount: number;
            }
        }

        promotions: {
            technical_name: string;
            id: number;
        }[];

        coupon: {
            coupon_code: string;
            campaign_code: string;
        }
    }>

    user?: UserValidationWebhook['user'] & {
        zip: string;
    }

    transaction: {
        id: number;
        external_id: string;
        payment_date: string;
        payment_method: number;
        dry_run: 1 | 0;
        agreement: number;
    }

    payment_details: {
        payout_currency_rate: number;
        payment_method_sum: CurrencyAndAmount;
        xsolla_balance_sum: CurrencyAndAmount;
        payout: CurrencyAndAmount;
        vat: CurrencyAndAmount;
        xsolla_fee: CurrencyAndAmount;
        payment_method_fee: CurrencyAndAmount;
        sales_tax: CurrencyAndAmount;
        repatriation_commission: CurrencyAndAmount;
    }

    custom_parameters?: CustomParameters;
}