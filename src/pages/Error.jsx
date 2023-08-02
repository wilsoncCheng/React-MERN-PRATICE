import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/images/not-found.svg'
const Error = () => {
    const error = useRouteError()
    console.log(error)
    if (error.status == 404) {
        return <Wrapper>
            <div className="">
                <img src={img} alt="not found" />
                <p>ohh! page not found</p>
                <Link to='/dashboard'>back home</Link>
            </div>
        </Wrapper>
    }
    return (
        <Wrapper>
            <div className="">
                <h3>something get wrong</h3></div>
        </Wrapper>
    )
}

export default Error
