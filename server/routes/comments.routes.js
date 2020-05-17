const express = require("express")
const router = express.Router()

const Comment = require("../models/comment.model")

router.get("/getcommentsbyevent/:id", (req, res, next) => {
  Comment.find({ event: req.params.id })
    .populate("createdBy")
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

router.get("/getcommentsbyuser/:id", (req, res, next) => {
  Comment.find({ createdBy: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

router.post("/createcomment", (req, res, next) => {
  Comment.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

router.post("/removecomment/:id", (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})


module.exports = router