import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Response<T = any> extends AxiosResponse<T>{}

const BASE_URL = import.meta.env.LEGACY_HOST;

const HttpLegacy: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 200000,
	headers: {
		Accept: 'application/json',
	}
},);

export default HttpLegacy;
