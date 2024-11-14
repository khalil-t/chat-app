//post send message with id 
import express from 'express'
import {sendmessage , receivemessage}from '../controllers/message.controller.js'
import protectRoute from '../middleware/protectRoute.js'
const router = express.Router();
router.post('/send/:id',protectRoute,sendmessage)
router.get('/receive/:id' ,protectRoute, receivemessage)

export default router 

