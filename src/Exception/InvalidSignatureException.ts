import XsollaException, { XsollaExceptionCode } from './XsollaException';

export default class InvalidSignatureException extends XsollaException {

    /**
     * Xsolla Exception Code.
     */
    public code: XsollaExceptionCode = 'INVALID_SIGNATURE';


    /**
     * Error message.
     */
    public message = 'Invalid signature.';

}