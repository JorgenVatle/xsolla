import { XsollaID } from './Xsolla.interface';

/**
 * Payment Settings
 *
 * @link https://developers.xsolla.com/api/v2/getting-started/#api_param_payment_ui_get_token_settings
 */
export default interface PaymentSettings  {

    /**
     * Transaction's external ID.
     */
    external_id: string;

    /**
     * Project ID.
     */
    project_id: XsollaID;

    /**
     * Interface language. Two-letter lowercase language. (ISO 639-1)
     */
    language: string;

    /**
     * Page to redirect the user to after payment. Parameters 'user_id', 'foreinginvoice', 'invoice_id' and
     * 'status' will be automatically added to the link.
     */
    return_url: string;

    /**
     * Preferred payment currency. Three-letter currency code. (ISO 4217)
     */
    currency: string;

    /**
     * Set to 'sandbox' to test out the payment process.
     * In this case, use https://sandbox-secure.xsolla.com to access the test payment UI.
     */
    mode?: 'sandbox';

    /**
     * Payment method ID
     */
    payment_method: number;

    /**
     * Payment widget. Can be 'paybycash' or 'giftcard'.
     * If the parameter is set, the user is redirected to the Pay by Cash or Gift Cards widget, respectively.
     */
    payment_widget: string;

}