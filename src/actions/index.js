import axios from 'axios';
import browserHistory from '../components/history';
import {AUTH_USER,UNAUTH_USER,AUTH_ERROR, FETCH_DATA} from '../actions/types';
import {encryptit,decryptit} from '../encypt';

const ROOT_URL="http://localhost:8080";

export function signinuser(email,password,form){
    return function(dispatch){
        let data={};
        data["email"]=email;
        data["password"]=password;
        const e=encryptit(JSON.stringify(data));
        axios.post(`${ROOT_URL}/signin`,{data:e}).then((res)=>{
          localStorage.setItem('token',encryptit(`jwt ${decryptit(res.data.token)}`));
          form.reset();
          dispatch({type:AUTH_USER});
          browserHistory.push('/feature');
        }).catch(()=>{
            dispatch(authError("Bad Signin Credentials"));
        });

    }
}

export function signoutuser(){
 localStorage.removeItem('token');
 return{
     type:UNAUTH_USER
 }
}

export function signupuser(data,form){
    const e=encryptit(JSON.stringify(data));
    return function(dispatch){
        axios.post(`${ROOT_URL}/signup`,{data:e}).then((res)=>{
            localStorage.setItem('token',encryptit(`jwt ${decryptit(res.data.token)}`));
            form.reset();
            dispatch({type:AUTH_USER});
            browserHistory.push('/feature');
        }).catch(()=>{
            dispatch(authError("Sign up failed. Try again."));
        });
    };
}

export function authError(error){
    return{
        type:AUTH_ERROR,
        payload:error
    }
}

export function getMessage(){
    let data=localStorage.getItem("token");
    return function(dispatch){
      axios.get(ROOT_URL,{
        headers:{authorization:data}
      }).then((res)=>{
        let data=JSON.parse(decryptit(res.data))["status"];
        dispatch({
            type:FETCH_DATA,
            payload:data
        })
      });
   }
}