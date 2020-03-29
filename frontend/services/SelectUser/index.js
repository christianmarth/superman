import axios from 'axios'
import query from './SelectUser.graphql'

export default class SelectUser {
    constructor(idToken,
        uid) {
        this.idToken = idToken
        this.uid = uid
    }

    async process() {
        return axios({
            method: "post",
            baseURL: process.server ? process.env.API_URL_SSR : process.env.API_URL,
            url: process.env.API_PATH,
            headers: {
                "Authorization": `Bearer ${this.idToken}`,
                "content-type": "application/json"
            },
            data: {
                query: query,
                variables: {
                    uid: this.uid
                }
            }
        });
    }
}