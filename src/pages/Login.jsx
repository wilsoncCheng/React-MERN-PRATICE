import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, FormRow } from "../components"
const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>login</h4>
                <FormRow type='email' name='email' defaultValue='wilson@gmail.com'></FormRow>
                <FormRow type='password' name='password' defaultValue='password'></FormRow>
                <button type="submit" className="btn btn-block">submit</button>
                <button type="button" className="btn btn-block">explore the app</button>
            </form>
        </Wrapper>
    )
}

export default Login
