import CONST from "../constants.js";

async function api(url, body) {
    console.log(`Fetch API ` + url);
    console.log(body);

    const result = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(body)
    });

    return {
        code: result.status,
        ...await result.json()
    };       
}

export default class {
    static async newGame({ gamename, username }) {
        return await api(CONST.API.GAME_STORE.NEW_GAME, arguments[0]);
    }

    static async deleteGame({ gameid }) {
        return await api(CONST.API.GAME_STORE.DELETE_GAME, arguments[0]);
    }

    static async getGame({ gameid }) {
        return await api(CONST.API.GAME_STORE.GET_GAME, arguments[0]);
    }

    static async listGames({ username }) {
        return await api(CONST.API.GAME_STORE.LIST_GAMES, arguments[0]);
    }

    static async addQuestion({ gameid, round, col, row, value, question, answer }) {
        return await api(CONST.API.GAME_STORE.ADD_QUESTION, arguments[0]);
    }

    static async getQuestion({ gameid, round, col, row }) {
        return await api(CONST.API.GAME_STORE.GET_QUESTION, arguments[0]);
    }

    static async deleteQuestion({ gameid, round, col, row }) {
        return await api(CONST.API.GAME_STORE.DELETE_QUESTION, arguments[0]);
    }

    static async setCategory({ gameid, round, col, description }) {
        return await api(CONST.API.GAME_STORE.SET_CATEGORY, arguments[0]);
    }

    static async getCategory({ gameid, round, col }) {
        return await api(CONST.API.GAME_STORE.GET_CATEGORY, arguments[0]);
    }

    static async allCategories({ gameid, round }) {
        return await api(CONST.API.GAME_STORE.ALL_CATEGORIES, arguments[0]);
    }

    static async getRound({ gameid, round, fields }) {
        return await api(CONST.API.GAME_STORE.GET_ROUND, arguments[0]);
    }
};