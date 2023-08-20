import { Themes, UserTheme } from '../models'

export class ThemeService {
  getUserTheme = async (userId: string) => {
    try {
      const res = await UserTheme.findOne({
        where: userId,
        include: [{ model: Themes, attributes: ['theme'] }],
      })

      return res
    } catch (error) {
      console.log(error)
    }
  }

  setUserTheme = async ({
    themeName,
    userId,
  }: {
    themeName: string
    userId: string
  }) => {
    try {
      const theme = await Themes.findOne({
        where: { theme: themeName },
      })

      if (theme) return await UserTheme.inserts({ themeId: theme.id, userId })
    } catch (error) {
      console.log(error)
    }
  }
}
