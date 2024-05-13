import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {

    const {userLogOut} = useContext(AuthContext)
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
    },async function (error) {
        if(error.response.status === 401 || error.response.status === 403) {
            await userLogOut();
            console.log('this is 401 or 403')
            navigate('/login')
            
        }
        return Promise.reject(error);
    });



    return axiosSecure
};

export default useAxiosSecure;