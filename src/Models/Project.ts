import Model from './Model';
import { CreateToken, Get, Update } from '../Interfaces/Project.interface';
import InvalidSignatureException from '../Exception/InvalidSignatureException';
import Hash from '../Utility/Hash';

interface Project {
    data: Get.response;
}

class Project extends Model {

    /**
     * Create a signature for the given input.
     */
    public sign(input: string) {
        return Hash('sha1', input + this.data.key);
    }

    /**
     * Update a project.
     */
    public update(data: Update.input): Promise<Project> {
        return this.client.put(`/projects/${data.project_id}`, data)
            .then(({ data }) => this.renew(data));
    }

    /**
     * Create a payment token for the current project.
     */
    public createPaymentToken(data: CreateToken.input): Promise<CreateToken.response> {
        if (!data.settings) {
            data.settings = {};
        }

        data.settings.project_id = this.data.project_id;

        return this.client.post(`/merchants/${this.client.merchantId}/token`, data)
            .then(({ data }) => data);
    }

    /**
     * Create payment URL for the given payment data.
     */
    public async createPaymentUrl(data: CreateToken.input): Promise<string> {
        const { token } = await this.createPaymentToken(data);
        let baseUrl = 'https://secure.xsolla.com/paystation2/';

        if (data.settings && data.settings.mode === 'sandbox') {
            baseUrl = 'https://sandbox-secure.xsolla.com/paystation2/';
        }

        return `${baseUrl}?access_token=${token}`;
    }

    /**
     * Validate an incoming webhook request.
     */
    public validateWebhookRequest(requestSignature: string, rawRequestBody: string): void {
        if (!requestSignature) {
            throw new InvalidSignatureException('No signature provided!');
        }

        if (typeof requestSignature !== 'string') {
            throw new InvalidSignatureException('Signature is not string! (Likely developer error)')
        }

        if (requestSignature.replace(/signature/i, '').trim() !== this.sign(rawRequestBody)) {
            throw new InvalidSignatureException;
        }
    }
}

export default Project;