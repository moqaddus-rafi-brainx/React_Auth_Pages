import { useReducer,useState } from "react";
import { Link } from "react-router-dom";

//Regular Expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailReducer(state,action)
{
    switch(action.type){
        case "CHANGE":
            let error="";
            if(action.value.trim()=="")
            {
                error="Email cannot be empty";
            }
            else if(!emailRegex.test(action.value.trim()))
            {
                error="Invalid Email";
            }
            return{ //return changed copy of state
                value:action.value.trim(),
                error:error,
            }
        default:
            return state;

    }
}

//Forget password function
function ForgetPassword(){

    const [emailState,dispatchEmail]=useReducer(emailReducer,{
            value:"",
            error:""
    })

    const [isSubmitted,setIsSubmitted]=useState(false);
    const isValid= emailRegex.test(emailState.value) && !emailState.error;

    const handleSubmit=(e)=>{
        //email sent to backend from where it returns the message to be shown.
        if(isValid)
        {
            setIsSubmitted(true);
        }
    }
    

    return( //Login FORM RETURNED when isSubmitted is False.
        <> 
        {!isSubmitted && (<form className="card" onSubmit={handleSubmit}>
            <p>Enter your email for getting reset password link</p>
            <input type="email" name="email" placeholder="Email" value={emailState.value} className="input"
                onChange={(e) =>
                    dispatchEmail({ type: "CHANGE", value: e.target.value })
                }
            />
            {emailState?.error && (
                <p className="error-prompt">{emailState.error}</p>
            )}
            
            <button type="submit" disabled={!isValid} >Submit</button>
            <pre>
                Back to  <Link to="/login" >Login</Link>
            </pre>
        </form>
        )}
        {isSubmitted && ( //Return this message if form submitted and link sent
            <div className="forget-message">
            <h2>Reset Password Link Sent</h2>
          <p>Check your email and click the link to reset your password.</p>
          </div>
        )}
        
        
        </>
    )

}

export default ForgetPassword;