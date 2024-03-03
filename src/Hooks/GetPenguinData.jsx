import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5108/api',
});

export const GetPenguinData = async () => {
    try {
        const response = await api.post('/test');
        console.log('Response From WebHook', response.data);
        return response.data;
    } catch (error) {
        console.error('Error Getting Penguin Data');
        throw error;
    }
};
