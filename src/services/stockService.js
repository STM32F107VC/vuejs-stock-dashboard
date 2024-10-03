import axios from 'axios';
const API_URL = 'https://sheetdb.io/api/v1/uls6iqoplnxpc';

class StockService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: API_URL
        });
    }

    async getRevenue(sheetName) {
        try {
            const response = await this.apiClient.get(`?sheet=${sheetName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
}

export const stockService = new StockService();