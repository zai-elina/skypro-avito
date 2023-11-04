export interface IUser {
  id: number
  name: string
  email: string
  city: string
  avatar: string
  sells_from: string
  phone: string
}

export interface IImage {
  id: number
  ad_id: number
  url: string
}

export interface IArticle {
  title: string
  description: string
  price: number
  id: number
  images: IImage[]
  user_id: number
  created_on: string
  user: IUser
}

export interface IFormFieldsRegister {
  password: string
  second_password: string
  email: string
  name?: string
  surname?: string
  city?: string
  rules?: {
    required?: string
    pattern?: { value: RegExp; message: string }
  }
}
