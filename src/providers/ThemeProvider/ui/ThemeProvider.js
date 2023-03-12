import { useState } from 'react';
import {themeContext} from '../model/themeContext'

export const themeVariants = {
    DARK: 'dark',
    LIGHT: 'light'
}

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themeVariants.DARK)
    const defaultValue = {theme, setTheme}

    return (
        <themeContext.Provider value={defaultValue}>
            {children}
        </themeContext.Provider>
    )
};

export default ThemeProvider;