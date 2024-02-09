/**
 * This file is used to generate a JWT token using the jsonwebtoken library.
 * The function generateJWT takes in a payload and an optional expiresIn parameter and returns a JWT token.
 * The default value for expiresIn is 1 hour.
 * Ensure that you have a .env file with a JWT_SECRET_KEY variable.
 */

import { sign } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export interface Payload {
	[key: string]: any;
}

export const generateJWT = (payload: Payload, expiresIn: string = '1h'): string => {
	const secret = process.env.JWT_SECRET_KEY;
	
	if (!secret)
		return 'Secret key is missing for generateJWT function. Please provide a SECRET_KEY in the .env file.';

	return sign(payload, secret, { expiresIn: expiresIn });
};
