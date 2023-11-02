import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Khi có async trước 1 hàm thì khi chạy sẽ ra 1 promise
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
