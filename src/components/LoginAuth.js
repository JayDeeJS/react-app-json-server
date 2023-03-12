import { setCookie } from "helpers/helpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFetch } from "requests/authActions";

const LoginAuth = () => {

    const [value, setValue] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitLog = (e) => {
        e.preventDefault()
        if (!value.username || !value.password) return

        loginFetch({...value})
            .then((data) => {
                const date = new Date().getMinutes()
                setCookie('token', data.data.token, 1)
                setCookie('user', data.data.data, 1)
                setCookie('minute', date, 1)
                navigate('/posts')
            })
    }
    console.log('work');

    return (
        <form onSubmit={submitLog}>
            <input name="username" value={value.username} onChange={handleChange} placeholder="Login"/>
            <input name="password" value={value.password} onChange={handleChange} placeholder="Password"/>
            <button type="submit">Sign in</button>
        </form>
    )
};

export default LoginAuth;