import express from "express";
import { signup ,login ,logout, defaultmessage} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login )
router.post("/logout", logout )
router.get("/", defaultmessage );

export default router;