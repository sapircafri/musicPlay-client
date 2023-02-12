import axios from "axios"

export const setToken = async (token) => {
    // when you do logout pass the parameter as an empty string
    axios.defaults.headers.common.Authorization = token? `Bearer ${token}`:null;
}

const apiCalls = async (method, url, data) => {
    try {
        const result = await axios({
            method: method,
            url: url,
            data: data
        });
        return result
    } catch (error) {
        console.log("error:", error);
    }
} 

export default apiCalls;