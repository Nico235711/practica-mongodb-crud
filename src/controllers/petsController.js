import PetsModel from "../models/pets.js"

class PetsController {
  constructor() {

  }

  // mét. asíncrono porque el back debe esperar una respuesta
  async createPet (req, res) {
    try {
      const data = await PetsModel.create(req.body)
      console.log(data);
      
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  async getAllPets (req, res) {
    try {
      // console.log("Hello Pets");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async getPetById (req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async updatePetById (req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async deletePetById (req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }
}

export default new PetsController()