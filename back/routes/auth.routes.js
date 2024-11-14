import express from "express"
import {sidbareUsers} from "../controllers/user.controller.js"
import protectRoute from '../middleware/protectRoute.js'
const router = express.Router()
router.get("/allusers",sidbareUsers )

export default router