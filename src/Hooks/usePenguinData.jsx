import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5108/api',
});

export const usePenguinData = () => {
    const getInitialData = async () => {
        try {
            const response = await api.post('/v1/getinitalstate');
            console.log('Hook response from intial:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error Getting Initial Penguin Data');
            throw error;
        }
    };

    const getYearSelectedData = async (year) => {
        //call
        try{
            const response = await api.post(`v1/yearselected/year=${year}`);
            //const response = await api.post(`v1/yearselected`);
            console.log('response from year selected: ', response.data );
            return response.data;
        } catch (error){
            console.log('Error Getting Year Selected Data');
            throw error;
        }
    };

    const getPollutionChangeData = async () => {
        //call
        try{
            const response = await api.post('v1/pollutionchange');
            console.log('response from pollution change: ', response.data );
            return response.data;
        } catch (error){
            console.log('Error Getting Pollution Change Data');
            throw error;
        }
    };

    const getCarbonEmissionsChangeData = async () => {
        //call
        try{
            const response = await api.post('v1/carbonemissionschange');
            console.log('response from carbon emissions change: ', response.data );
            return response.data;
        } catch (error){
            console.log('Error Getting Carbon Emissions Change Data');
            throw error;
        }
    };

    const getOverfishingChangeData = async () => {
        //call
        try{
            const response = await api.post('v1/overfishingchange');
            console.log('response from overfishing change: ', response.data );
            return response.data;
        } catch (error){
            console.log('Error Getting Overfishing Change Data');
            throw error;
        }
    };

    const getCollectedPenguinsData = async () => {
        //call
        try{
            const response = await api.get('v1/collectedpenguins/collectedpenguindata');
            console.log('response from get collected penguin data: ', response.data );
            return response.data;
        } catch (error){
            console.log('Error Getting Collected Penguin Data');
            throw error;
        }
    };

    return {getInitialData, getYearSelectedData, getPollutionChangeData, getCarbonEmissionsChangeData, getOverfishingChangeData, getCollectedPenguinsData};
};

