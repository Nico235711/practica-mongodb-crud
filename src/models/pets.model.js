import { ObjectId } from "mongodb";
import DbClient from "../config/dbClient.js";
import petsSchema from "../schemas/pets.schema.js";


class PetsModel {
  
  // si los mét. son static no es necesario retorna una instancia
  static async create(pet) {
    return await petsSchema.create(pet)
  }

  static async getAllPets() {
    return await petsSchema.find()
  }

  static async getPet(id) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.findOne({ _id: new ObjectId(id) })
  }

  static async updatePet(id, pet) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.updateOne({ _id: new ObjectId(id) }, { $set: pet })
  }

  static async deletePet(id) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.deleteOne({ _id: new ObjectId(id) })
  }
}

export default PetsModel