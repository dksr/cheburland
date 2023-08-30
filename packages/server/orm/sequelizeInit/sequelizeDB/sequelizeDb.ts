import * as process from 'process'
import { Sequelize } from 'sequelize'
import type { SequelizeOptions } from 'sequelize-typescript'

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env

const port =
  process.env.NODE_ENV === 'development' ? 'localhost' : POSTGRES_HOST

const sequelizeOptions: SequelizeOptions = {
  host: port,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}

export const sequelize = new Sequelize(sequelizeOptions)

export const dbConnect = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    console.log('Connection has been established successfully.')
  } catch (e) {
    console.error('Unable to connect to the database:', e)
  }
}
