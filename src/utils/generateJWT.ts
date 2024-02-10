/**
 * This file is used to generate a JWT token using the jsonwebtoken library.
 * The function generateJWT takes in a payload and an optional expiresIn parameter and returns a JWT token.
 * The default value for expiresIn is 1 hour.
 */

import { sign } from 'jsonwebtoken';

export interface Payload {
	[key: string]: any;
}

export const generateJWT = (payload: Payload, secret: string, expiresIn: string = '1h'): string => {
	return sign(payload, secret, { expiresIn });
};