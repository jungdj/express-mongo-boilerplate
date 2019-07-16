import { User } from "../db"

export const getUser = async (req, res) => {
	const { id } = req.params
	try {
		const user = await User.findOne({ _id: id })
		res.json(user)
	} catch(error) {
		console.error(error)
		res.status(404).json({
			message: error.message
		})
	}
}

export const postUser = async (req, res) => {
	const { firstName, lastName, phoneNumber } = req.body
	try {
		const user = await User.create({ firstName, lastName, phoneNumber })
		res.json(user)
	} catch(error) {
		console.error(error)
		res.status(500).json({
			message: error.message
		})
	}
}