import { useContext } from "react"
import { themeContext, themeVariants } from "../providers/ThemeProvider"

export const useTheme = () => {
    const {theme, setTheme} = useContext(themeContext)
    const toggleTheme = () => {
        const actualTheme = themeVariants.DARK === theme ? themeVariants.LIGHT : themeVariants.DARK
        setTheme(actualTheme)
    }
    return {theme, toggleTheme}
}