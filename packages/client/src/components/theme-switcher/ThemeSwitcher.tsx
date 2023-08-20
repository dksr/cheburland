import { useThemeContext } from '@app/context'
import { Box, Switch, Text } from '@mantine/core'

import { Themes } from '@/shared'

export const ThemeSwitcher = (): JSX.Element => {
  const { theme, onSwitchTheme } = useThemeContext()

  return (
    <Box>
      <Text>{theme === Themes.dark ? 'Темная тема' : 'Светлая тема'}</Text>
      <Switch
        onChange={() => onSwitchTheme()}
        size="lg"
        p="10px"
        color="orange"
        label={theme === Themes.dark ? 'Темная тема' : 'Светлая тема'}
      />
    </Box>
  )
}
