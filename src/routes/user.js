import express from "express"
import * as userControllers from "../controllers/user"

const router = express.Router()

router.get('/',  userControllers.getUser)
router.post('/', userControllers.postUser)

module.exports = router
