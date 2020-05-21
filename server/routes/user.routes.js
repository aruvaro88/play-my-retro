const express = require("express")
const router = express.Router()

const User = require("../models/user.model")
const { ensureLoggedIn } = require("connect-ensure-login")

router.post("/editUser/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.get("/getuser/:id", (req, res, next) => {
  User.findById(req.params.id)
    .populate("friends")
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/adduserasfriend/:id/:friendid", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendid } })
    .then((data) => {
      console.log("ruta del back ejecutada")
      res.json(data)
    })
    .catch((err) => next(new Error(err)))
})

module.exports = router
