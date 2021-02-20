/**
 * @file: response.js
 * @summary It Contain function layer for api response status with data.
*/

export const successAction = (data, message = 'OK') => {
	return { statusCode: 200, data, message };
};

export const failAction = (message = 'Fail', statusCode = 400) => {
	return { statusCode, data: null, message };
};
