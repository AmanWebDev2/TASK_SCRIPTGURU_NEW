import axios from "axios"
import Cookies from 'js-cookie';

const registerApi=async(data)=>{
    try{
        const api = 'http://localhost:5050/sign-up'
        const resp = await axios.post(api,data);
        if(resp.data) {
            return resp.data;
        }else{
            console.error(resp.data)
        }
    }catch(err){
        console.log(err);
    }
}

const loginApi=async(data)=>{  
    try {
        const api = 'http://localhost:5050/sign-in'
        const resp = await axios.post(api,data);
        if(resp.data) {
            const { token,userId } = resp.data.data;
            if(token) {
                Cookies.set('token',token, { expires: 1, secure: true });
                Cookies.set('userId',userId, { expires: 1, secure: true });
            }
            return resp.data
        }
    } catch (error) {
        return null;
        console.log(error)
    }
}

const getUserApi=async()=>{
    try {
        const id = Cookies.get('userId');
        const token = Cookies.get('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const api = `http://localhost:5050/api/v1/user/${id}`
        const resp = await axios.get(api,config);
        if(resp.data && resp.data.data) {
            return resp.data.data;
        }
        
    } catch (error) {
        console.log(error);
    }
}

const updateUser=async(data)=>{
    try {
        const id = Cookies.get('userId');
        const token = Cookies.get('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const api = `http://localhost:5050/api/v1/user/${id}`
        const resp = await axios.put(api,data,config);
        if(resp.data && resp.data.data){
            return resp.data.data;
        }

    } catch (error) {
        console.log(error)
    }
}

const productsApi=async(filter)=>{
    try {
        const api = `http://localhost:5050/product?${filter ? filter : ''}`

        const resp = await axios.get(api);
        if(resp.data && resp.data.data){
            return resp.data.data;
        }

    } catch (error) {
        console.error(error);
    }
}

const categoryApi=async()=>{
    try {
        const api = `http://localhost:5050/category`
        const resp = await axios.get(api);
        if(resp.data && resp.data.data){
            return resp.data.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export {
    registerApi,
    loginApi,
    getUserApi,
    updateUser,
    productsApi,
    categoryApi
}