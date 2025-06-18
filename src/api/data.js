import request from '@/api/request.js'

export const getAllData = () => {
    return request.get('/data');
};

export const updateTimestamp = (hash) => {
    return request.put(`/data/${hash}/timestamp`);
};

export const deleteData = (hash) => {
    return request.delete(`/data/${hash}`);
};

export const deleteAllData = () => {
    return request.delete('/data');
};