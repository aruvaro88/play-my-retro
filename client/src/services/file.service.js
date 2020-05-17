import axios from "axios"

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/files",
      withCredentials: true,
    })
  }

    handleAvatarUser = (theFile) => this.service.post("/uploadavatar", theFile)
    handlePhotoEvent = (theFile) => this.service.post("/uploadevent", theFile)
}
