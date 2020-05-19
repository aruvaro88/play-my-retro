const express = require("express")
const router = express.Router()

const uploader = require("../configs/cloudinary.config")
const checkAuth = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect("/"))


router.post("/uploadavatar", uploader.single("avatar"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"))
    return
  }

  res.json({ secure_url: req.file.secure_url })
})

router.post("/uploadevent", uploader.single("photo"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"))
    return
  }

  res.json({ secure_url: req.file.secure_url })
})

module.exports = router
