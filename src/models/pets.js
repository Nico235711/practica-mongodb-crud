import { ObjectId } from "mongodb";
import DbClient from "../config/dbClient.js";

class PetsModel {
  async create(pet) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.insertOne(pet)
  }

  async getAllPets() {
    const collectionPets = DbClient.db.collection("pets")
    // las llaves del find indican un filtro
    return await collectionPets.find({}).toArray()
  }

  async getPet(id) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.findOne({ _id: new ObjectId(id) })
  }

  async updatePet(id, pet) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.updateOne({ _id: new ObjectId(id) }, { $set: pet })
  }

  async deletePet(id) {
    const collectionPets = DbClient.db.collection("pets")
    return await collectionPets.deleteOne({ _id: new ObjectId(id) })
  }
}

export default new PetsModel