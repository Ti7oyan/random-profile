interface IPerson {
  name: string,
  userName: string,
  gender: string,
  email: string,
  avatar: string,
  phone: string,
  address: {
    country: string,
    city: string,
  },
  favourites: {
    genre: string,
    song: string,
  },
  vehicle: {
    name: string,
    vrm: string
  },
  birthDate: Date,
  work: {
    name: string,
    department: string

  }
}

export default IPerson
