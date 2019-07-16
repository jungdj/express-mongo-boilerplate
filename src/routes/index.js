import graphql from "../db/graphql"
import express from "express"
import userRoutes from "./user"

const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get("/hc", (req, res) => {
	res.sendStatus(200);
})

router.use('/graphql', graphql)
router.use("/user", userRoutes)

module.exports = router
