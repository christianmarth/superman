import axios from 'axios'
import query from './InsertUser.graphql'

export default class InsertUser {
    constructor(idToken,
        uid,
        email,
        name,
        photoUrl) {
        this.idToken = idToken
        this.uid = uid
        this.email = email
        this.name = name
        this.photoUrl = photoUrl
    }

    async process() {
        const response = await axios({
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
                    uid: this.uid,
                    email: this.email,
                    name: this.name,
                    photo_url: this.photoUrl
                }
            }
        });
        console.log(response);
    }
}