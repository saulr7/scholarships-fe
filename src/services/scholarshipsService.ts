import axios from "axios"
import ScholarshipModel from "../models/scholarshipModel"

const getAll = () => {
  return axios.get<ScholarshipModel[]>("scholarship/")
}

const getById = (id: number) => {
  return axios.get<ScholarshipModel>(`scholarship/${id}`)
}

const create = (model: ScholarshipModel) => {
  return axios.post("scholarship/", model)
}
const update = (model: ScholarshipModel) => {
  return axios.put("scholarship/", model)
}

export { getAll, create, getById, update }