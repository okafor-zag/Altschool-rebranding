import { useNavigate } from "react-router-dom"
import useDocumentTitle from "./useDocumentTitle"
import "./login.css"

// Login component
const Login = ({setUser})=> {
useDocumentTitle('Login - fakeuserAuth') // SEO for title in Login page
    const navigate = useNavigate()
     // get user details onSubmit
    const getUser = (e)=> {
        e.preventDefault()
        const user = e.target
        setUser(user.username.value) 
        if ((user.username.value && user.password.value) !== "") {
            setTimeout(()=>{
                navigate('/') // navigate to home page if details are correct
            },5000)    
           navigate('/loading')  // display loading component for 5 secs
        }
    }     

 return (
    <div className="bodys">
    <div className="containers">
        <form onSubmit={getUser}> 
            <input type="text" name="username" placeholder="Enter username" required/> 
            <br/> 
            <input type="password" name="password" placeholder="Enter password" required/> 
            <br/> 
            <button>Sign In</button>   
        </form>
    </div>
    </div>
)
}


export default Login // make login component available for use on other components
