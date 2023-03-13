const API_URL = "http://localhost:8080"

export default {
    API: {
        REGISTER: API_URL + "/credentials/register",
        LOGIN: API_URL + "/credentials/login",
        LOGOUT: API_URL + "/credentials/logout",
        STATUS: API_URL + "/credentials/status",
        VERIFY: API_URL + "/verify"
    }
}