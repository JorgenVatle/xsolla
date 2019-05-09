export type XsollaExceptionCode = 'INVALID_USER' | 'INVALID_PARAMETER' | 'INVALID_SIGNATURE' | 'INCORRECT_AMOUNT' | 'INCORRECT_INVOICE';

export default abstract class XsollaException extends Error {

    /**
     * Xsolla Error Code
     */
    public abstract readonly name: XsollaExceptionCode;

    /**
     * User friendly error message.
     */
    public abstract readonly message: string;

    /**
     * HTTP response code for Xsolla exception.
     */
    public abstract readonly httpResponseCode: number;

    /**
     * Response to be given to an incoming Xsolla Webhook request.
     */
    public jsonResponse() {
        return {
            code: this.name,
            message: this.message,
        }
    }

}