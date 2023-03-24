const API_URL = "http://localhost:8080"

export default {
    API: {
        CREDENTIALS: {
            REGISTER: API_URL + "/credentials/register",
            LOGIN: API_URL + "/credentials/login",
            LOGOUT: API_URL + "/credentials/logout",
            STATUS: API_URL + "/credentials/status",
            VERIFY: API_URL + "/verify",
        },
        GAME_STORE: {
            NEW_GAME: API_URL + "/gamestore/newGame",
            DELETE_GAME: API_URL + "/gamestore/deleteGame",
            GET_GAME: API_URL + "/gamestore/getGame",
            LIST_GAMES: API_URL + "/gamestore/listGames",
            GET_QUESTION: API_URL + "/gamestore/getQuestion",
            ADD_QUESTION: API_URL + "/gamestore/addQuestion",
            DELETE_QUESTION: API_URL + "/gamestore/deleteQuestion",
            SET_CATEGORY: API_URL + "/gamestore/setCategory",
            GET_CATEGORY: API_URL + "/gamestore/getCategory",
            ALL_CATEGORIES: API_URL + "/gamestore/allCategories",    
            GET_ROUND : API_URL + "/gamestore/getRound",     
        }
    }
}