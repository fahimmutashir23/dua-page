import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"
})

const useAxios = () => {

    return axiosInstance
};

export default useAxios;