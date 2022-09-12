import axios from "axios";
import urlServer from "../utils/server";

const discoveryService = {
    onDiscovery: async (data: string) => {
        try {
            const res = await axios.get(`${urlServer}/discovery?search=${data}`);
            console.log('onSearch:: ', data, ' res:: ', res.status);
            if(res.status == 200){
              console.log('onSearch:: ', data, ' res:: ', res.data);
              return res.data;
            }
            return [];
          } catch (err) {
            console.log('ERROR onSearch:: ', data, ' res:: ', err);
          }    
    },
    onSearch: async (data: string) => {
      try {
        const res = await axios.get(`${urlServer}/?search=${data}`);
        if(res.status == 200){
          console.log('onSearch:: ', data, ' res:: ', res.data);
          return res.data;
        }
        return [];
      } catch (err) {
        console.log('ERROR onSearch:: ', data, ' res:: ', err);
      }    
    },
    onHashtags: async (callback: (res?: any[], err?: Error) => void) => {
        try {
            const res = await axios.get(`${urlServer}/hashtags`);
            console.log('axiosResponse', res);

            if(res.status == 200){
              callback(res.data, undefined);
            }
            callback([], undefined);
          } catch (error: unknown) {
            const err = error as Error;
            console.log('ERROR onSearch:: res:: ', err);
            callback(undefined, err);
          }    
    }
}

export default discoveryService;