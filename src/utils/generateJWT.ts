import { sign } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export interface Payload {
	[key: string]: any;
}

export const generateJWT = (payload: Payload): string => {
	const secret = process.env.SECRET_KEY;
	
	if (!secret)
		return 'Secret key is missing for generateJWT function. Please provide a SECRET_KEY in the .env file.';

	return sign(payload, secret);
};
