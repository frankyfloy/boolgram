import axios from "axios";
const BASE_URL = "https://flynn.boolean.careers/exercises/api/boolgram/";

export default{
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}
