import axios from "axios"

const devUrls = {
  tst: "dev.tst.trendsofttech.work",
  api: "https://trendsofttech-forms.onrender.com",
}

let urls = devUrls

const api = axios.create({
  baseURL: urls.api,
})

export const careerForm = args =>
  api.post("api/career-store", {
    name: args.name,
    email: args.email,
    phone_no: args.phone_no,
    position: args.position,
  })

export const getCareerData = args => api.get("api/career-show")

export const careerfileupLoad = args =>
  api.post(`api/career-image-update/10`, {
    image: args.image,
  })

export const googleSheetContactForm = args =>
  api.post("/googleSheet-contact-form", {
    name: args.name,
    phoneNumber: args.phoneNumber,
    email: args.email,
    companyName: args.companyName,
    enquiries: args.enquiries,
  })

export const contactForm = args =>
  api.post("/contact-form", {
    name: args.name,
    phoneNumber: args.phoneNumber,
    email: args.email,
    companyName: args.companyName,
    enquiries: args.enquiries,
  })

export const webAccessbilityForm = args =>
  api.post("/webAccessibility-form", {
    url: args.url,
    firstName: args.firstName,
    lastName: args.lastName,
    email: args.email,
    phoneNumber: args.phoneNumber,
  })

export const docAccessbilityForm = args =>
  api.post("api/doc-store", {
    first_name: args.first_name,
    last_name: args.last_name,
    email: args.email,
    phone_no: args.phone_no,
  })

export const uploadDocAccessbilityForm = args =>
  api.post(`api/doc-image-update/${args.id}`, { image: args.image })
