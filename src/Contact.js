import React from 'react'
import "./contact.css"
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    const handleClick = (e) => {
        e.preventDefault();
    }
  return (
    <div className='bodys'>
        <div className=' containers'>
            <form onSubmit={handleClick}>
                <label>Enter Your Fullname</label>
                <input type="text" placeholder='Fullname' required/>
                <label >Tell us more about yourself</label>
                <textarea id='text' placeholder='Tell us something' rows="4" cols="50"/>
                <button>submit</button>
            </form>
        </div>

        <div>
            This is our social media handles,  Be sure to reach out

        </div>
        <div>
            <button><Link to="/Contact/Social" >Here</Link></button>
        
        </div>
        <Outlet />
    </div>
  )
}

export default Contact;