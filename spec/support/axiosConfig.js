import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://petstore.swagger.io/v2/',
    timeout: 5000, // Optional timeout value
    headers: {'Authorization': 'special-key'}
  });

  export default axiosInstance;