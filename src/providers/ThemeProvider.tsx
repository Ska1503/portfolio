import { useEffect, createContext, ReactNode, FC } from "react"
import { LIGHT } from "../constans"
import { useLocalStorage } from "../hooks"

type ThemeContextProps = {
  theme: string
  changeTheme: (theme: string) => void
}

type ThemeProvider = {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "",
  changeTheme: () => {},
})

export const ThemeProvider: FC<ThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", LIGHT)

  const changeTheme = (theme: string) => setTheme(theme)

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}