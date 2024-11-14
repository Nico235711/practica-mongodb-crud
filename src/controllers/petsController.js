import PetsModel from "../models/pets.js"

class PetsController {
  constructor() {

  }

  // mét. asíncrono porque el back debe esperar una respuesta
  async createPet (req, res) {
    try {
      const data = await PetsModel.create(req.body)
      // console.log(data);
      
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  async getAllPets (req, res) {
    try {
      const data = await PetsModel.getAllPets()
      // console.log(data);
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  async getPetById (req, res) {
    try {
      const { id } = req.params
      const data = await PetsModel.getPet(id)
      // console.log(data);
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  async updatePetById (req, res) {
    try {
      const { id } = req.params
      const data = await PetsModel.updatePet(id, req.body)
      console.log(data);
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  async deletePetById (req, res) {
    try {
      const { id } = req.params
      const data = await PetsModel.deletePet(id)
      console.log(data);
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
      
    }
  }
}

export default new PetsController()