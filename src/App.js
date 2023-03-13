import { useTheme } from "hooks/useTheme";
import React, { useEffect } from "react";
import { setCookie } from "helpers/helpers";
import "styles/index.css"
import LoginAuth from "components/LoginAuth";
import AuthProvider from "providers/AuthProvider/ui/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Posts from "components/Posts";


function App() {
  const {theme, toggleTheme} = useTheme()

  useEffect(() => {
    setCookie('token', 'Bearer', 1)
  }, [])

  return (
    <div className={`app ${theme}`}>
      <AuthProvider>
        {/* <button onClick={toggleTheme}>Toggle</button> */}
        <Routes>
          <Route path="/" element={
            <div className="authBlock">
              <LoginAuth/>
            </div>
          }/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;