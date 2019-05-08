export type XsollaExceptionCode = 'INVALID_USER' | 'INVALID_PARAMETER' | 'INVALID_SIGNATURE' | 'INCORRECT_AMOUNT' | 'INCORRECT_INVOICE';

export default abstract class XsollaException extends Error {

    /**
     * Xsolla Error Code
     */
    public abstract code: XsollaExceptionCode;

    /**
     * User friendly error message.
     */
    public abstract message: string;

}