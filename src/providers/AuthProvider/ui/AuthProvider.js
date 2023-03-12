import { getCookie, setCookie } from "helpers/helpers";
import { useEffect } from "react";
import { loginFetch, refreshFetch } from "requests/authActions";

const AuthProvider = ({children}) => {

    useEffect(() => {
        const token = getCookie('token')
        const date = getCookie('minute')

        if (!date) return
        if (!token) return
        console.log(token);

        const currentDate = new Date().getMinutes()
        if (Number(date) !== currentDate) {
            refreshFetch({token: token})
            .then((data) => {
                const date = new Date().getMinutes()
                setCookie('token', data.data.new_token, 1)
                setCookie('minute', date, 1)
            })
        }
    })

    return (
        <>{children}</>
    )
};

export default AuthProvider;