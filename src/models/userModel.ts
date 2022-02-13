interface UserModel {
  id: number
  emailAddress: string
  userName: string
  createdAt: Date
  updatedAt: Date
  userPassword: string
  role: string
}

export default UserModel 