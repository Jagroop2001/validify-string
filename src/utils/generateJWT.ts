import * as crypto from 'crypto';

export interface Payload {
  [key: string]: any;
}

export interface DecodedJWT {
	header: object;
	payload: object;
}

function base64urlEncode(data: string): string {
  return Buffer.from(data).toString('base64')
	.replace(/\+/g, '-')
	.replace(/\//g, '_')
	.replace(/=/g, '');
}

function base64urlDecode(data: string): string {
	const buffer = Buffer.from(data, 'base64');
	return buffer.toString();
}

export const generateJWT = (payload: Payload, secret: string, expiresInSec: number): string => {
  const header = {
	alg: 'HS256',
	typ: 'JWT'
  };

  const encodedHeader = base64urlEncode(JSON.stringify(header));
  const encodedPayload = base64urlEncode(JSON.stringify(payload));

  const signatureInput = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto.createHmac('sha256', secret).update(signatureInput).digest('base64');
  const token = `${encodedHeader}.${encodedPayload}.${base64urlEncode(signature)}`;

  return token;
}

export const decodeJWT = (token: string): DecodedJWT | null => {
	const parts = token.split('.');
	if (parts.length !== 3) {
		console.error('Invalid JWT format');
		return null;
	}

	const [encodedHeader, encodedPayload] = parts;
	const header = JSON.parse(base64urlDecode(encodedHeader));
	const payload = JSON.parse(base64urlDecode(encodedPayload));

	return {
		header,
		payload
	};
}
