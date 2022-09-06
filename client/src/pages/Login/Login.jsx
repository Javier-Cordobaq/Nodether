import { Layout } from "../../styled-components/Layout.styled"
import { useEffect, useState } from "react"
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { LoginDiv } from "./styled-components/LoginDiv.styled"
import { LayoutResponsive } from "../../styled-components"

const Login = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState(null);

    const handleCallbackResponse = (res) => {
        const userConverted = jwt_decode(res.credential)
        setUser(userConverted)
    }

    useEffect(() => {
        /* Global google from the script on the index.html */
        google.accounts.id.initialize({
            client_id: "1038764245198-dogijpi31h8u4d1fujc7nqc32hn2ltb9.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
        if (user !== null) {
            return dispatch(getInfo(user))
        }
    }, [user])

    return (
        <LayoutResponsive>
            <LoginDiv>
                <h2>Log In</h2>
                <div id="signInDiv"></div>
            </LoginDiv>
        </LayoutResponsive>
    )
}

export default Login