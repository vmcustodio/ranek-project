import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
})

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)  // corpo do post, o que tá sendo mandado pro servidor
  },
  post(endpoint, body) { 
    return axiosInstance.post(endpoint, body)
  }
}

export function getCep(cep) {
  return axios.get(`https://viacep.com/ws/${cep}/json/`)
}