import Crypto from 'crypto';

export default (algorithm: string, string: string) => {
    const sum = Crypto.createHash(algorithm);
    sum.update(string);
    return sum.digest('hex');
}