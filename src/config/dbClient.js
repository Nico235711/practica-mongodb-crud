import { MongoClient } from 'mongodb'
import "dotenv/config"

// me conecto
class DbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=PracticaMongoCRUD`
    
    this.client = new MongoClient(queryString)
    this.connectBD()
  }

  async connectBD() {
    try {
      await this.client.connect()
      // creo la base de datos
      this.db = this.client.db("adopcion")
      console.log("conectando a la base de datos");
      
    } catch (error) {
      console.log(`Hubo un error al conectar a la BD ${error}`);
      
    }
  }
}

export default new DbClient()