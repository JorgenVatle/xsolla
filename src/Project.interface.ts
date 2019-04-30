interface PaymentModule {

    /**
     * Whether or not to enable this module for the project.
     */
    enabled: boolean;

    /**
     * Localized names to show in the payment UI.
     */
    custom_name: string[];

}
/**
 * Create a project.
 *
 * @link https://developers.xsolla.com/api/v2/publisher-account/#api_projects_create_project
 */
export module Create {
    /**
     * Request input
     */
    export interface input {
        /**
         * Merchant ID
         */
        merchant_id?: number;

        /**
         * Short project name for reports.
         * Up to 12 characters long.
         */
        descriptor: string;

        /**
         * Array of localized project names.
         */
        name: string[];

        /**
         * Project website URL.
         */
        url: string;

        /**
         * Array of localized project descriptions.
         */
        description: string[];

        /**
         * Webhook URL.
         */
        payment_url: string;

        /**
         * Project secret key.
         */
        key: string;

        /**
         * URL to redirect the user to after a successful payment.
         */
        return_url: string;

        /**
         * Whether to keep user data in the Xsolla database.
         */
        user_billing_enabled: boolean;

        /**
         * Whether to show the user's saved payment accounts and payment history in the payment UI.
         */
        show_user_in_paystation: boolean;

        /**
         * List of languages that corresponding settings are localized to.
         */
        locale_list: string[];

        /**
         * Enables user details verification via Public User ID
         * For payments through cash kiosks.
         */
        user_public_id_enabled: boolean;

        /**
         * Enables tokenless integration.
         */
        send_json_to_paystation: boolean;

        /**
         * Whether External ID is required for integration with Xsolla.
         */
        is_external_id_required: boolean;

        /**
         * Whether or not to send webhooks to the webhook URL.
         */
        ipn_enabled: boolean;

        /**
         * Whether the partner can accept real payments. 'true' if there is a signed agreement in force and at least
         * one enabled project. 'false' by default.
         */
        payments_available: boolean;

        /**
         * Payment modules.
         */
        components: {

            /**
             * Virtual currency module.
             */
            virtual_currency: PaymentModule;

            /**
             * Virtual items module.
             */
            items: PaymentModule;

            /**
             * Simple checkout module.
             */
            simple_checkout: PaymentModule;

            /**
             * Subscriptions module.
             */
            subscriptions: PaymentModule;

        }
    }

    export interface response {

        /**
         * Project ID
         */
        id: number;

    }
}

/**
 * Get a Project
 *
 * @link https://developers.xsolla.com/api/v2/publisher-account/#api_projects_get_project
 */
export module Get {

    export interface input {

        /**
         * Project ID
         */
        project_id: string;

    }

    export interface response extends Create.input {}

}

/**
 * Update a Project
 *
 * @link https://developers.xsolla.com/api/v2/publisher-account/#api_projects_update_project
 */
export module Update {

    export interface input extends Create.input {}

    export type response = undefined;

}