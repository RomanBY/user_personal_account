export interface IProfile {
  name: string
  phone: string
  email: string
  address: {
    country: string
    city: string
    street: string
    flat: number | null
  }
}
