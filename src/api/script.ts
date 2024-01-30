import axios, {AxiosResponse} from "axios"
import formData from "form-data";

const SIGN_UP_URL: string = "http://127.0.0.1:8000/api/v1/signup/"
const LOG_IN_URL: string = "http://127.0.0.1:8000/api/v1/login/"
const CONTACTS_URL: string = "http://127.0.0.1:8000/api/v1/contacts/"

const createAuthParams = (email:string, password: string): formData => {
    const params = new formData()

    params.append('username', email)
    params.append('email', email)
    params.append('password', password)

    return params
}

const headers = {
  // You can include additional headers if needed
  // 'Content-Type': 'application/json',
  // 'Authorization': 'Bearer <your-access-token>',
  // ...

  // Include the Origin header
  'Origin': 'http://localhost:3000',  // Replace with your frontend origin
  
};


export const login = async (email: string, password: string): Promise<any> => {
    const params = createAuthParams(email, password)

    try {
        const response = await axios.post(LOG_IN_URL, params);
        return response.data;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }

}

export const signup = async (password: string, email: string): Promise<any> => {
    const params = createAuthParams(email, password)

    try {
        const response = await axios.post(SIGN_UP_URL, params);
        return response.data;
    } catch (error) {
        // Handle error if needed
        console.log(error)
    }
}

export const addContact = async (userId: number): Promise<any> => {
    try {
        const response = await axios.post(`${CONTACTS_URL}/${userId}`);
        return response.data;
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
