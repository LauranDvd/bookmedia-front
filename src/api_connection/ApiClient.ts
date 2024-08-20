import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BACKEND_URL } from '../utils/Constants';
import { IApiClient } from './IApiClient';

export class AxiosApiClient implements IApiClient {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string = BACKEND_URL) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public async get<T>(url: string, config?: object): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        console.log(`api client get response data: ${JSON.stringify(response.data)}`);
        return response.data;
    }

    public async post<T>(url: string, data?: object, config?: object): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    public async put<T>(url: string, data?: object, config?: object): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    public async delete<T>(url: string, config?: object): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }
}

export default AxiosApiClient;
