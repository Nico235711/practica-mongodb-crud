import { Router } from 'express'
import PetsController from '../controllers/petsController.js'

const router = Router()

router.post("/", PetsController.createPet)
router.get("/", PetsController.getAllPets)
router.get("/:id", PetsController.getPetById)
router.put("/:id", PetsController.updatePetById)
router.delete("/:id", PetsController.deletePetById)

export default router