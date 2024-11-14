import DbClient from "../config/dbClient.js";

class PetsModel {
  async create(pet) {
    const columnPets = DbClient.db.collection("pets")
    await columnPets.insertOne(pet)
  }
}

export default new PetsModel()