import axios, {AxiosInstance} from 'axios';

const ROOT_API :AxiosInstance = axios.create({
    baseURL:"http://localhost:8080"
})

export default ROOT_API;
