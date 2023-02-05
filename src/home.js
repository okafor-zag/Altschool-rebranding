import Navigation from "./Navigate"
import { Link, useNavigate } from "react-router-dom"
import useDocumentTitle from "./useDocumentTitle"
import { useEffect } from "react"
const Home = ({user, setUser})=>{
    const navigate = useNavigate()
    useEffect(()=>{
      if (!user) {
      navigate('/login') // navigate to login page if no user
      }  
    }, [user])
// log out btn function
const handleLogout = () => {
    setUser(null);
    navigate('/login')
}
    console.log(user)

    useDocumentTitle('Home - fakeuserAuth') // SEO for title in Home page

    return (
        <div>
            {/* <Navigation /> */}
            <h1>Hello {user? user.toUpperCase(): user}</h1> 
            <div className="home-btns">
                <button onClick={()=>{navigate('/verify')}}>
                    Click to check if account is verified
                </button>
                <p>This page is still under development but you can check list of users here</p>
                <button> <Link to="/users"> profile </Link></button>
                <button onClick={handleLogout}>
                     Logout
                </button>
            </div>
         </div>
    )
}

export default Home 
