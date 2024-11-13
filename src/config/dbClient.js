import { MongoClient } from 'mongodb'

// me conecto
class DbClient {
  constructor() {
    const queryString = ""
    this.client = new MongoClient(queryString)
  }

  async connectBD() {
    try {
      await this.client.connect()
    } catch (error) {
      console.log("Hubo un error al conectar a la BD");
      
    }
  }
}