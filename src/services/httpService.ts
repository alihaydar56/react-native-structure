import axios from 'axios';
import { isJwtExpire, UUID } from '../utils/helper';
import RNRestart from 'react-native-restart';
import { store } from '../redux/store';
import { CLEAR_DATA } from '../redux/temp/actionTypes';
import { endLoading, startError } from '../redux/loading/actions';
const HttpService = {

    async get(url:string, data = {}, headers = {}) {
        const config = getConfig(url, headers);
        let response = await axios.get(config.url, {
            timeout: 7000,
            headers: config.headers
        }).catch((res) => {
          errorHandling(res,store,url)
        });
        return response;
    },

    async post(url:string, data = {}, headers = {}) {
        const config = getConfig(url, headers);
       // console.log("sended config :",config.url,data);
        let response = await axios.post(config.url, data, {
            timeout: 7000,
            headers: config.headers
        }).catch((err) => errorHandling(err,store,url))

        return response;
    },

    async put(url:string, data = {}, headers = {}) {
        const config = getConfig(url, headers);
        let response = await axios.put(config.url, data, {
            timeout: 7000,
            headers: config.headers
        }).catch((err) => errorHandling(err,store,url))

        return response;
    },

    async delete(url:string, data = {}, headers = {}) {
        const config = getConfig(url, headers);

        let response = await axios.delete(config.url, {
            data: data,
            timeout: 7000,
            headers: config.headers
        }).catch((err) =>errorHandling(err,store,url));

        return response;
    },

    async getPaginated(url:string,skip:number,limit:number,headers={}){
        url=`${url}?skip=${skip}&limit=${limit}`; 
        const config = getConfig(url, headers);
        let response = await axios.get(config.url, {
            timeout: 7000,
            headers: config.headers
        }).catch((err) =>errorHandling(err,store,url));

        return response;
    }
}



export const getConfig = (url:string, headers:any) => {

    const baseUrl = store.getState().tempReducer.baseUrl;
   
    headers['Content-Type'] = 'application/json'
    headers['Accept'] = 'application/json'   
  

    return {
        url: encodeURI(baseUrl + url),
        headers
    }
}

axios.interceptors.request.use((request: any) => {
    try {

    } catch (error: any) {

    }
    return request;
  });

 
  const errorHandling = async (res, store, url) => {
    console.log("[ERROR]", url, res.response.data);

    if (res.response) {
      const data_ = res.response.data
      const isString = (typeof data_) === 'string'
      const err: string = isString ? data_ : data_.data ? data_.data.msg : data_.msg
      
      if (!isString && !res.response.data.msg.includes('JWT expired')) {
        store.dispatch(endLoading())
        store.dispatch(startError(err))
      } else {
        // logout()
      }
    }
  }

export const logout=async()=>{
    await store.dispatch({type:CLEAR_DATA})

    setTimeout(()=>{
        RNRestart.Restart();
    },500)
}

export default HttpService;