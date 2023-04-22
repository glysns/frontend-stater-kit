import axios, {AxiosInstance, AxiosResponse} from 'axios';

const ROOT_API :AxiosInstance = axios.create({
    baseURL:"http://localhost:8080"
})
ROOT_API.interceptors.request.use(

  (req) => {
    console.log('request');
    req.headers['Content-type'] = 'application/json';
    if(req.url?.includes('public') || req.url?.includes('login'))
      console.log('rota publica')
    else{
      const token = localStorage.getItem('token')
      console.log('obtendo o token do localStorage', token)
      req.headers['Authorization'] = token;
    }
    return req
  },
  (err)=>{
    console.log('request - error')
    return Promise.reject(err)
  }

)

ROOT_API.interceptors.response.use(

  (res) => {
    console.log('response');
    console.log(res);
    return response(res);
  },
  (err)=>{
    console.log('request - error')
    return Promise.reject(response(err))
  }

)

const response = function(res:AxiosResponse) : AxiosResponse{
  const response :AxiosResponse = 
   {
    data:res.data?.body,
    status:res.status,
    statusText:res.statusText,
    headers:res.headers,
    config:res.config
  }
  console.log(response)
  return response;
}
export default ROOT_API;
