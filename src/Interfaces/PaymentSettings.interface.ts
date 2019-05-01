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

    /**
     * Interface settings
     *
     * @link https://developers.xsolla.com/api/v2/getting-started/#api_param_payment_ui_get_token_settings_ui
     */
    ui: {

        /**
         * Payment UI theme.
         */
        theme: 'default' | 'default_dark';

        /**
         * Payment UI size.
         */
        size:
            /**
             * The least possible size of the payment UI. Use this value when the window size is strictly limited
             * (dimensions: 620 x 630)
             */
            'small'

            /**
             * Recommended size. Use this value to display the payment UI in a lightbox (dimensions: 740 x 760)
             */
            | 'medium'

            /**
             * The optimal size for displaying the payment UI in a new window or tab (dimensions: 820 x 840)
             */
            | 'large';

        /**
         * Device type.
         */
        version: 'desktop' | 'mobile';

    }
}