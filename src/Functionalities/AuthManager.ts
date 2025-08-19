import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export function authenticate(email:string, password:string) {
    const data = JSON.stringify({
        "email": email,
        "password": password
    })

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/auth/login/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config).then((response) => {
        if (response.status === 200) {
            const cookies = new Cookies();
            cookies.set('access_token', response.data.tokens.accessToken, { path: '/',expires: new Date(Date.now() + 60 * 60 * 1000) });
            cookies.set('refresh_token', response.data.tokens.refreshToken, { path: '/',expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
            window.location.href = '/home';
        }else{
            toast.error(response.data.message)
        }
    }).catch((error) => {
        if (error.response) {
            toast.error(error.response.data.message)
        }else{
            console.log(error)
            toast.error("Something went wrong")
        }
    });
}

export function register(name:string,email:string,password:string,university:string,bio:string,gender:string,usn:string){
    const data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "university": university,
        "bio": bio,
        "gender": gender,
        "usn": usn
    });

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/auth/register/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios.request(config).then((response) => {
        if (response.status === 201) {
            toast.success(response.data.message)
            window.location.href = '/login';
        }else{
            toast.error(response.data.message)
        }
    }).catch((error) => {
        if (error.response) {
            toast.error(error.response.data.message)
        }else{
            console.log(error)
            toast.error("Something went wrong")
        }
    });
}

export function refreshToken(){
    const cookies = new Cookies();
    const refresh_token = cookies.get('refresh_token');
    const data = JSON.stringify({
        "refreshToken": refresh_token
    })

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/auth/refresh-token/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config).then((response) => {
        if (response.status === 200) {
            const cookies = new Cookies();
            cookies.set('access_token', response.data.tokens.accessToken, { path: '/',expires: new Date(Date.now() + 60 * 60 * 1000) });
            cookies.set('refresh_token', response.data.tokens.refreshToken, { path: '/',expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
        }else{
            toast.error(response.data.message)
        }
    }
    ).catch((error) => {
        if (error.response) {
            toast.error(error.response.data.message)
        }else{
            console.log(error)
            toast.error("Something went wrong")
        }
    });
}

export function logout() {
    const data = JSON.stringify({
        "refreshToken": new Cookies().get('refresh_token')
    })
    const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/auth/logout/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios.request(config).then((response) => {
        if (response.status === 200) {
            const cookies = new Cookies();
            cookies.remove('access_token', { path: '/' });
            cookies.remove('refresh_token', { path: '/' });
            window.location.href = '/login';
        }else{
            toast.error(response.data.message)
        }
    }
    ).catch((error) => {
        if (error.response) {
            toast.error(error.response.data.message)
        }else{
            console.log(error)
            toast.error("Something went wrong")
        }
    });
}

export function areTokensValid(): boolean {
    const cookies = new Cookies();
    const access_token = cookies.get('access_token');
    const refresh_token = cookies.get('refresh_token');
    if (access_token === undefined && refresh_token === undefined) {
        return false;
    }
    if( access_token === undefined || refresh_token !== undefined) {
        refreshToken();
    }
    return true;
}

export function getAccessToken(): string {
    const cookies = new Cookies();
    const access_token = cookies.get('access_token');
    if (access_token === undefined) {
        return "";
    }
    return access_token;
}