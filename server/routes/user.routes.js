const express = require("express")
const router = express.Router()

const User = require("../models/user.model")
const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect("/"))

router.post("/editUser/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Cannot edit the user" }) : null))
})

router.get("/getuser/:id", (req, res, next) => {
  User.findById(req.params.id)
    .populate("friends")
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching the user" }) : null))
})

router.post("/adduserasfriend/:id/:friendid", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendid } })
    .then((data) => {
      console.log("ruta del back ejecutada")
      res.json(data)
    })
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching the user" }) : null))
})

module.exports = router
