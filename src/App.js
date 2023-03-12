import { useTheme } from "hooks/useTheme";
import React, { useEffect } from "react";
import { setCookie } from "helpers/helpers";
import "styles/index.css"
import LoginAuth from "components/LoginAuth";
import AuthProvider from "providers/AuthProvider/ui/AuthProvider";
import { Route, Routes } from "react-router-dom";


function App() {
  const {theme, toggleTheme} = useTheme()

  useEffect(() => {
    setCookie('token', 'Bearer', 1)
  }, [])

  return (
    <div className={`app ${theme}`}>
      <AuthProvider>
        <button onClick={toggleTheme}>Toggle</button>
        <Routes>
          <Route path="/" element={
            <LoginAuth/>
          }/>
          <Route path="/posts" element={<div>Posts</div>}/>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;