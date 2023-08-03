import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, FormRow } from '../components'
const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type='text' name='name' defaultValue='Wilson'></FormRow>
                <FormRow type='text' name='lastName' labelText='Last Name' defaultValue='Cheng'></FormRow>
                <FormRow type='text' name='location' defaultValue='earth'></FormRow>
                <FormRow type='email' name='email' defaultValue='wilson@gmail.com'></FormRow>
                <FormRow type='password' name='password' defaultValue='12345'></FormRow>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </Wrapper>
    )
}

export default Register
