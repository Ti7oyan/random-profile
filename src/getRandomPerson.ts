import { faker } from '@faker-js/faker'
import IPerson from './types'

const getRandomPerson = (): IPerson => {
  const name = faker.name.findName()
  const fullName = name.split(' ')
  return {
    name,
    userName: faker.internet.userName(fullName[0], fullName[1]),
    gender: faker.name.gender(),
    email: faker.internet.email(fullName[0], fullName[1]),
    avatar: faker.internet.avatar(),
    phone: faker.phone.phoneNumber(),
    address: {
      country: faker.address.country(),
      city: faker.address.city()
    },
    favourites: {
      genre: faker.music.genre(),
      song: faker.music.songName()
    },
    vehicle: {
      name: faker.vehicle.vehicle(),
      vrm: faker.vehicle.vrm()
    },
    birthDate: faker.date.birthdate(),
    work: {
      name: faker.company.companyName(),
      department: faker.commerce.department()

    }
  }
}

export default getRandomPerson
