import type { ModelAttributes } from 'sequelize/types'
import { DataType, Model } from 'sequelize-typescript'

type ThemesType = {
  id: string
  name: string
  description: string
}

export const Themes: ModelAttributes<Model, ThemesType> = {
  id: {
    type: DataType.UUID,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
}
