import axios from 'axios'
import query from './InsertMerchant.graphql'

export default class InsertMerchant {
  constructor(
    idToken,
    name, location, images, description) {
    this.idToken = idToken
    this.name = name
    this.location = location
    this.images = images
    this.description = description

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
          name: this.name,
          location: this.location,
          description: this.description,
          assets: {
            data: this.images
          }
        }
      }
    });
  }
}
