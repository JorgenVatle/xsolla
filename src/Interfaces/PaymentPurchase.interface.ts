/**
 * Object containing purchase details.
 *
 * @link https://developers.xsolla.com/api/v2/getting-started/#api_param_payment_ui_get_token_purchase
 */
interface Purchase {

    /**
     * Object containing virtual currency details.
     */
    virtual_currency: {

        /**
         * Purchase amount in the virtual currency.
         */
        quantity: number;

        /**
         * Currency of the virtual currency package to use in all calculations
         */
        currency: string;

    }

    /**
     * Object with data about the virtual items in purchase.
     */
    virtual_items: {

        /**
         * Currency of the ordered items to use in all calculations.
         */
        currency: string;

        /**
         * Item data (array).
         */
        items: VirtualItem[];

    }

    /**
     * Subscription data.
     */
    subscription: {

        /**
         * Plan ID.
         */
        plan_id: string;

        /**
         * The type of operation applied to the user’s subscription plan. To change the subscription plan, pass
         * the ‘change_plan’ value. You need to specify the new plan ID in the purchase.subscription.plan_id parameter.
         */
        operation?: 'change_plan';

        /**
         * Product ID.
         */
        product_id: string;

        /**
         * Currency of the subscription plan to use in all calculations.
         */
        currency: string;

        /**
         * Subscription plans to show in the payment UI.
         */
        available_plans: any[];

        /**
         * Trial period in days.
         */
        trial_days: number;
    }

    /**
     * Game keys.
     */
    pin_codes: {

        /**
         * Currency of a game key within the order to use in all calculations.
         */
        currency: string;

        /**
         * Game keys.
         */
        codes: GameKey[];

        /**
         * Object with upgrade data.
         */
        upgrade: {

            /**
             * Upgrade ID
             */
            id: number;

            /**
             * ID of the entry containing data on the user and their packages.
             */
            id_user_history: number;

        }
    }

    /**
     * Checkout details.
     */
    checkout: {

        /**
         * Currency of the purchase. Three-letter currency code (ISO 4217).
         */
        currency: string;

        /**
         * Purchase amount.
         */
        amount: number;

        /**
         * Purchase description.
         */
        description?: {

            /**
             * Purchase description to include in the UI and email receipts.
             */
            value: string;

        }
    }

    /**
     * Gift details.
     */
    gift: {

        /**
         * Giver ID.
         */
        giver_id: string;

        /**
         * Message from the giver.
         */
        message: string;

        /**
         * Whether to hide the giver identity from the recipient. 'true' by default.
         */
        hide_giver_from_receiver?: 'true' | 'false';

        /**
         * Recipient friends.
         */
        friends: GiftFriend[];

    }

    /**
     * Information about a discount promo code or bonuses upon purchase.
     */
    coupon_code: {

        /**
         * Promo code value.
         */
        value: string;

        /**
         * Hide the field promo code is entered into in the payment UI. 'false' by default.
         */
        hidden: boolean;

        /**
         * Your custom parameters, represented as a valid JSON set of key-value pairs.
         */
        custom_parameters: {

            [key: string]: any,

        }
    }

}

interface VirtualItem {

    /**
     * Item ID
     */
    sku: string;

    /**
     * Item quantity.
     */
    amount: number;

    /**
     * Item groups IDs (array). The payment UI will only include items within the specified group.
     */
    available_groups: string[];

}

interface GameKey {

    /**
     * Game SKU set in Publisher Account.
     */
    digital_content: string;

    /**
     * DRM platform used to distribute the game. Can be 'steam', 'playstation', 'xbox', 'uplay', 'origin', or 'drmfree'.
     * Make sure to have configured the required DRM platforms in your Publisher Account. If not passed in the token,
     * will be chosen by the user in the payment UI.
     */
    drm: 'steam' | 'playstation' | 'xbox' | 'uplay' | 'origin' | 'drmfree';

}

interface GiftFriend {

    /**
     * Gift recipient ID.
     */
    id: string;

    /**
     * Gift recipient nickname.
     */
    name: string;

    /**
     * Gift recipient nickname.
     */
    email: string;

}

type PaymentPurchase = Partial<Purchase>;

export default PaymentPurchase;