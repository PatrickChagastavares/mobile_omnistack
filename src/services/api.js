import axios from "axios";

const api = axios.create({
    baseURL:"https://semana-omnistack-patrick.herokuapp.com",
});

export default api;