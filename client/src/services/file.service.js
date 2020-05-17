import axios from "axios"

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/files`,
      withCredentials: true,
    })
  }

    handleAvatarUser = (theFile) => this.service.post("/uploadavatar", theFile)
    handlePhotoEvent = (theFile) => this.service.post("/uploadevent", theFile)
}
