import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useGetCurrentUserQuery } from '@/app/redux'
import { useGetThemeMutation, useSetThemeMutation } from '@/app/redux/api'
// import { useAppDispatch, useOAuth } from '@/hooks'
import { getCookie, setCookie, Themes } from '@/shared'

interface ThemeContextType {
  theme?: string
  switchTheme?: () => void
}

const ThemeContext = createContext<ThemeContextType>({})

const { Provider } = ThemeContext

interface ThemeContextProviderProps {
  children: ReactNode
  cookies?: string
}

const ThemeProvider = ({ children, cookies }: ThemeContextProviderProps) => {
  const theme = getCookie('theme', cookies)
  const [getTheme] = useGetThemeMutation()
  const [setTheme] = useSetThemeMutation()
  const [currentTheme, setCurrentTheme] = useState(theme || Themes.dark)
  const { data } = useGetCurrentUserQuery()
  const userId = data?.id

  const getThemeData = async () => {
    if (!theme && userId) {
      try {
        const themeData = await getTheme().unwrap()

        if (currentTheme !== themeData) setCurrentTheme(themeData)
      } catch (e) {
        console.error(e)
      }
    }
  }

  const switchTheme = async () => {
    const modifiedTheme =
      currentTheme === Themes.light ? Themes.dark : Themes.light
    setCookie('theme', modifiedTheme)
    setCurrentTheme(modifiedTheme)

    if (userId) {
      try {
        await setTheme({ theme: modifiedTheme }).unwrap()
      } catch (e) {
        console.error(e)
      }
    }
  }

  useEffect(() => {
    getThemeData()
  }, [])

  return (
    <Provider value={{ theme: currentTheme, switchTheme }}>{children}</Provider>
  )
}

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)

  if (themeContext) return themeContext
}

export { ThemeProvider, useThemeContext }
