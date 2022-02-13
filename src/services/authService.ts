import jwt_decode from "jwt-decode";
import { axios } from "../config";
import UserModel from "../models/userModel";

type LoginReponse = {

  ok: boolean
  token: string

}
const login = async (emailAddress: string, userPassword: string) => {

  const resp = await axios.post<LoginReponse>("auth/login", { emailAddress, userPassword })
  const { token, ok } = resp.data

  if (ok) {
    localStorage.setItem('token', token);
  }

  return ok
}


const logOut = () => {
  localStorage.removeItem('token');
}

const isLoggedIn = () => {
  const token = localStorage.getItem('token') || "";

  if (token) {
    return true
  } else {
    return false
  }
}

const getToken = () => localStorage.getItem('token') || "";

const getTokenPayload = (): UserModel | null => {
  const token = localStorage.getItem('token') || ""

  if (!token)
    return null

  const decoded = jwt_decode<UserModel>(token);

  return decoded

}

const isAdmin = (): boolean => {

  const payload = getTokenPayload()

  if (!payload) {
    return false
  }
  return payload.role === "ADMIN"

}


export { login, logOut, isLoggedIn, getToken, getTokenPayload, isAdmin }