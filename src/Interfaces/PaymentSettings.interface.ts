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
         * Device type.
         */
        version: 'desktop' | 'mobile';

        /**
         * Link to the EULA.
         */
        license_url: string;

        /**
         * Interface mode in Pay Station. Can be 'user_account' only: The header contains only the account navigation
         * menu, and the user cannot select a product or make a payment. This mode is only available on the desktop.
         */
        mode?: 'user_account';


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


        header: {

            /**
             * Whether or not this element can be hidden on Payment UI. 'true' by default.
             */
            visible_virtual_currency_balance: boolean;

        }

        /**
         * Interface settings for the desktop version.
         */
        desktop: {

            /**
             * Header settings.
             */
            header: {

                /**
                 * Whether to show the header in the payment UI.
                 */
                is_visible: boolean;

                /**
                 * If 'true', the header will show your logo (please first provide the image to your account manager).
                 */
                visible_logo: boolean;

                /**
                 * Whether to show the project name in the header.
                 */
                visible_name: boolean;

                /**
                 * Whether to show the purchase description (purchase.description.value) in the header. ‘true’ by
                 * default.
                 */
                visible_purchase: boolean;

                /**
                 * How to show the header. Can be 'compact' (hides project name and user ID) or 'normal' (default).
                 */
                type: 'compact' | 'normal';

                /**
                 * Whether to show a Close button in Pay Station desktop. The button closes Pay Station and redirects
                 * the user to the URL specified in the "settings.return_url" parameter. 'false' by default.
                 */
                close_button: boolean;

            }

            subscription_list: {

                /**
                 * List template. Can be 'list' (default) or 'grid'.
                 */
                layout: 'list' | 'grid';

                /**
                 * Any text to show above the list of available subscription plans in the payment UI.
                 */
                description: string;

                /**
                 * If 'true', and if the user's local currency is different from the one set for the subscription plan,
                 * the user will be able to see both prices: one in the local and one in the basic currency.
                 */
                display_local_price: boolean;

            }

            virtual_item_list: {

                /**
                 * List template. Can be 'list' (default) or 'grid'.
                 */
                layout: 'list' | 'grid';

                /**
                 * If 'true', the price will be shown on the button. If 'false', the price will be shown on the left of
                 * the button. 'false' by default.
                 */
                button_with_price: boolean;

                /**
                 * Display virtual item groups as a vertical/horizontal menu. Can be 'horizontal_navigation' or
                 * 'vertical' (default).
                 */
                view: 'horizontal_navigation' | 'vertical';

            }

            virtual_currency_list: {

                /**
                 * Any text to show above the list of virtual currencies.
                 */
                description: string;

                /**
                 * If 'true', the price will be shown on the button. If 'false', the price will be shown on the left of
                 * the button. 'false' by default.
                 */
                button_with_price: boolean;

            }
        }

        mobile: {

            /**
             * A user can only pay using their saved payment methods. Can be 'saved_accounts'.
             */
            mode?: 'saved_accounts';

            header: {

                /**
                 * Whether to show a Close button in Pay Station mobile. The button closes Pay Station and redirects the
                 * user to the URL specified in the "settings.return_url" parameter. 'false' by default.
                 */
                close_button: boolean;

            }

            footer: {

                /**
                 * Whether to hide the footer in the mobile version of the payment UI.
                 */
                is_visible: boolean;

            }
        }

        /**
         * Menu settings.
         *
         * @link https://developers.xsolla.com/api/v2/getting-started/#api_param_payment_ui_get_token_settings_ui_components
         */
        components: {

            /**
             * Virtual items submenu.
             */
            virtual_items: {

                /**
                 * Position of the submenu in the menu.
                 */
                order: number;

                /**
                 * Whether to show the submenu.
                 */
                hidden: boolean;

                /**
                 * Group to show after opening the virtual items tab.
                 */
                selected_group: string;

                /**
                 * Item to show after opening the virtual items tab (item SKU).
                 */
                selected_item: string;

            }

            /**
             * Virtual currency submenu.
             */
            virtual_currency: {

                /**
                 * Whether the user can enter an arbitrary quantity of the virtual currency in the payment UI.
                 */
                custom_amount: boolean;

                /**
                 * Position of the submenu in the menu.
                 */
                order: number;

                /**
                 * Whether to show the submenu.
                 */
                hidden: boolean;

            }

            /**
             * Subscription plans submenu.
             */
            subscriptions: {

                /**
                 * Position of the submenu in the menu.
                 */
                order: number;

                /**
                 * Whether to show the submenu.
                 */
                hidden: boolean;

            }
        }
    }
}