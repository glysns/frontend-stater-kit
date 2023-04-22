import axios, {AxiosInstance} from 'axios';

const ROOT_API :AxiosInstance = axios.create({
    baseURL:"http://localhost:8080"
})
ROOT_API.interceptors.request.use(

  (cfg) => {
    console.log(cfg);
    cfg.headers['Content-type'] = 'application/json';
    if(cfg.url?.includes('public') || cfg.url?.includes('login'))
      console.log('rota publica')
    else{
      const token = localStorage.getItem('token');
      cfg.headers['Authorization'] = 'ERA PARA SER O TOKEN';
    }
    return cfg
  }

)
export default ROOT_API;
