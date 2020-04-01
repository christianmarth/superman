import axios from 'axios'
import query from './InsertProduct.graphql'

export default class InsertProduct {
  constructor(
    idToken,
    name, merchant_id, price, description, asset_id) {
    this.idToken = idToken
    this.name = name
    this.merchant_id = merchant_id
    this.price = price
    this.description = description
    this.asset_id = asset_id
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
          merchant_id: this.merchant_id,
          price: this.price,
          description: this.description,
          asset_id: this.asset_id
        }
      }
    });
  }
}
