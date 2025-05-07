import { Link } from "react-router-dom";


function VerifyPassword(){
    return(
        <p>
            Your email has been verified, you can now{' '} <Link to="/login">Login</Link>
        </p>
    )
}

export default VerifyPassword;