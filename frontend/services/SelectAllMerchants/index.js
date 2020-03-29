import axios from 'axios'
import query from './SelectAllMerchant.graphql'

export default class SelectAllMerchant {
    constructor(idToken) {
        this.idToken = idToken
    }

    async process() {
        return axios({
            method: "post",
            baseURL: process.server ? process.env.API_URL_SSR : process.env.API_URL,
            url: process.env.API_PATH,
            headers: {
                "content-type": "application/json"
            },
            data: {
                query: query
            }
        });
    }
}