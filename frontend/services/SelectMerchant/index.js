import axios from 'axios'
import query from './SelectMerchant.graphql'

export default class SelectMerchant {
    constructor(idToken,
        id) {
        this.idToken = idToken
        this.id = id
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
                    id: this.id
                }
            }
        });
    }
}