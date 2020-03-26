import axios from 'axios'
import query from './InsertMerchant.graphql'

export default class InsertMerchant {
    constructor(
        idToken,
        name) {
        this.idToken = idToken
        this.name = name
    }

    async process() {
        const response = await axios({
            method: "post",
            baseURL: process.env.API_URL,
            url: process.env.API_PATH,
            headers: {
                "Authorization": `Bearer ${this.idToken}`,
                "content-type": "application/json"
            },
            data: {
                query: query,
                variables: {
                    name: this.name
                }
            }
        });
        console.log(response);
    }
}