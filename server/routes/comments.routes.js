const express = require("express")
const router = express.Router()

const Comment = require("../models/comment.model")
const { ensureLoggedIn } = require("connect-ensure-login")

router.get("/getcommentsbyevent/:id", (req, res, next) => {
  Comment.find({ event: req.params.id })
    .populate("createdBy")
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.get("/getcommentsbyuser/:id", (req, res, next) => {
  Comment.find({ createdBy: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/createcomment", ensureLoggedIn(), (req, res, next) => {
  Comment.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})

router.post("/removecomment/:id", ensureLoggedIn(), (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(new Error(err)))
})


module.exports = router