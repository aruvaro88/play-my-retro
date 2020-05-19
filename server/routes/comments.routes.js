const express = require("express")
const router = express.Router()

const Comment = require("../models/comment.model")
const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect("/"))

router.get("/getcommentsbyevent/:id", (req, res, next) => {
  Comment.find({ event: req.params.id })
    .populate("createdBy")
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching event comments" }) : null))
})

router.get("/getcommentsbyuser/:id", (req, res, next) => {
  Comment.find({ createdBy: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error fetching user comments" }) : null))
})

router.post("/createcomment", (req, res, next) => {
  Comment.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error creating that comment" }) : null))
})

router.post("/removecomment/:id", (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => (err ? res.status(500).json({ message: "Error removing that comment" }) : null))
})


module.exports = router