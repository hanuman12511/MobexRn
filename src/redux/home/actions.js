import * as type from './types';

export const getUser =(data)=>{

      return{
            type:type.getUser,
            payload:data
      }

      
}