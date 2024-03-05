import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5108/api',
});

export const useGetPenguinData = () => {
    const getPenguinData = async () => {
        try {
            const response = await api.post('/v1/getinitalstate');
            console.log('Response From WebHook', response.data);
            return response.data;
        } catch (error) {
            console.error('Error Getting Penguin Data');
            throw error;
        }
    };

    const createPenguin = async () => {
        //call
    };

    return {getPenguinData, createPenguin};
};

