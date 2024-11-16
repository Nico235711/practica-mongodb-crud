import { MongoClient } from 'mongodb'
import "dotenv/config"
import mongoose from 'mongoose'

// me conecto
class DbClient {
  constructor() {
    this.connectBDWithMongoose()
  }
  async connectBDWithMongoose() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=PracticaMongoCRUD`
    
    // this.client = new MongoClient(queryString)
    await mongoose.connect(queryString)
    console.log("conección con mongoose");
    
    // this.connectBD()
  }

  // async connectBD() {
  //   try {
  //     await this.client.connect()
  //     // creo la base de datos
  //     this.db = this.client.db("adopcion")
  //     console.log("conectando a la base de datos");
      
  //   } catch (error) {
  //     console.log(`Hubo un error al conectar a la BD ${error}`);
      
  //   }
  // }
  async closeConnectionBD() {
    try {
      await mongoose.disconnect()
      console.log("Conección cerrada");
      
    } catch (error) {
      console.log("Error aal cerrar la conección");
      
    }
  }
}

export default new DbClient()