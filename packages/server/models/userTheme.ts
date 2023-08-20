import type { ModelAttributes } from 'sequelize/types'
import { DataType, Model } from 'sequelize-typescript'

type UserThemeType = {
  id: string
  themeId: string
  userId: string
}

export const UserTheme: ModelAttributes<Model, UserThemeType> = {
  id: {
    type: DataType.UUID,
    primaryKey: true,
  },
  themeId: {
    type: DataType.STRING,
    allowNull: false,
  },
  userId: {
    type: DataType.STRING,
    allowNull: false,
  },
}
