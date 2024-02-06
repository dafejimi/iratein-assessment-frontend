import axios, {AxiosResponse} from "axios"
import formData from "form-data";

const SIGN_UP_URL: string = "http://127.0.0.1:8000/api/v1/signup"
const LOG_IN_URL: string = "http://127.0.0.1:8000/api/v1/login"
const CONTACTS_URL: string = "http://127.0.0.1:8000/api/v1/contacts/"


const getCookie = (name: string): string | null => {
    let cookieValue: string | null = null;

    if (document.cookie && document.cookie !== '') {
        const cookies: string[] = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie: string = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === `${name}=`) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
};


const createAuthParams = (email:string, password: string): formData => {
    const params = new formData()

    params.append('username', email)
    params.append('email', email)
    params.append('password', password)

    return params
}


export const login = async (email: string, password: string): Promise<any> => {
    const csrfToken: string | null = getCookie("csrftoken")
    
    const _headers: object = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
        'Access-Control-Allow-Origin': "http://127.0.0.1:3000/",
        "Access-Control-Allow-Methods" : "POST",
        "Access-Control-Allow-Headers" : "Content-Type, X-CSRFToken, Accept, Content-Type",
        'X-CSRFToken': csrfToken,
    }

    const params = createAuthParams(email, password)

    try {
        const response = await axios.post(LOG_IN_URL, params, { headers: _headers, withCredentials: true});
        return response.data;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }

}

export const signup = async (password: string, email: string): Promise<any> => {
    const csrfToken: string | null = getCookie("csrftoken")

    const _headers: object = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://127.0.0.1:3000/",
        "Access-Control-Allow-Methods" : "POST",
        "Access-Control-Allow-Headers" : "Content-Type, X-CSRFToken, Accept, Accept-Language, Content-Language",
        'X-CSRFToken': csrfToken,
    }

    const params = createAuthParams(email, password)

    try {
        const response = await axios.post(SIGN_UP_URL, params, { headers: _headers, withCredentials: true});
        return response;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }
}

export const addContact = async (userId: number): Promise<any> => {
    try {
        const response = await axios.post(`${CONTACTS_URL}/${userId}`);
        return response;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }   
}

export const getContacts =async (userId: number): Promise<any> => {
    try {
        const response = await axios.get(`${CONTACTS_URL}/${userId}`);
        return response.data;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }
}
