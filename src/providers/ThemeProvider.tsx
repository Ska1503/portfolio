import type { ReactNode } from 'react'
import { useEffect, createContext } from 'react'
import { THEME } from 'src/constants'
import { useLocalStorage } from 'src/hooks'

type ThemeContextProps = {
  theme: string
  changeTheme: (theme: string) => void
}

type ThemeProvider = {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  changeTheme: () => {},
})

const STORAGE_KEY = 'theme'

export const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useLocalStorage(STORAGE_KEY, THEME.DARK)

  const changeTheme = (theme: string) => setTheme(theme)

  useEffect(() => {
    if (theme === THEME.DARK) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
