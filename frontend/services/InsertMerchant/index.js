import axios from 'axios'
import query from './InsertMerchant.graphql'

export default class InsertMerchant {
    constructor(
        idToken,
        name, location, images) {
        this.idToken = idToken
        this.name = name
        this.location = location
        this.images = images
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
                    object: {
                        name: this.name,
                        location: this.location,
                        assets: {
                            data: this.images
                        }
                    }
                }
            }
        });
        console.log(response);
    }
}