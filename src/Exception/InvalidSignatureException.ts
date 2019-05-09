import XsollaException, { XsollaExceptionCode } from './XsollaException';

export default class InvalidSignatureException extends XsollaException {

    /**
     * Xsolla Exception Code.
     */
    public name: XsollaExceptionCode = 'INVALID_SIGNATURE';

    /**
     * Error message.
     */
    public message = 'Invalid signature.';

    /**
     * HTTP response code for this exception.
     */
    public httpResponseCode = 403;

}