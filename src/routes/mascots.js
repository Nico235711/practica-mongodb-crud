import { Router } from 'express'
import { MascotsController } from '../controllers/mascotsController.js'

const router = Router()

router.post("/", MascotsController.createMascot)
router.get("/", MascotsController.getAllMascots)
router.get("/:id", MascotsController.getMascotById)
router.put("/:id", MascotsController.updateMascotById)
router.delete("/:id", MascotsController.deleteMascotById)

export default router