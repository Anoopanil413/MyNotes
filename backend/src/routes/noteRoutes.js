import express from "express"
import {createNote,getNotes,deleteNote} from '../controllers/notesController.js'
import {userLOgin,authorisedUser} from '../controllers/userControllers.js'
import {authMiddleware} from '../controllers/auth.js'

const router = express.Router()

router.get('/getNotes',authMiddleware,getNotes)

router.post('/writeNote',authMiddleware,createNote)


router.post('/login',userLOgin)


router.post('/authHome',authorisedUser)

router.delete('/deleteNote',authMiddleware,deleteNote)





export default router