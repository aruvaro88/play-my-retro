const express = require("express")
const router = express.Router()

const User = require("../models/user.model")

router.post("/editUser/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

module.exports = router