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
    }
}



export const getConfig = (url:string, headers:any) => {
    //const token=store.getState().userInformationReducer.token;
    const baseUrl = store.getState().tempReducer.baseUrl;
    // if token does not valid then logout and route user to login page
    // if(!isJwtExpire(token)){
    //     logout();
    // }

   // console.log(store.getState().tempReducer.baseUrl);

    headers['Content-Type'] = 'application/json'
    headers['Accept'] = 'application/json'   
   // headers['x-uuid'] = UUID()
    //set token to authorization if it exists
    // if(token){
    //     headers['Authorization']=`Bearer ${token}`
    //     headers['Cookie']=`jwt=${token}`
    // } 

    //("base urllll :",baseUrl+url);
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

  // axios.interceptors.response.use((response) => {
  //   console.log("interceptor res :",response)
  //  // let uuid = response.config.headers['x-uuid'];
  //   try {

  //   } catch (error: any) {

  //   }
  //   return response;
  // }, (error) => {
  //   let uuid = error.response.config.headers['x-uuid'];
  //   return Promise.reject({ ...error });
  // });

  const errorHandling = async (res, store, url) => {
    console.log("[ERROR]", url, res);

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