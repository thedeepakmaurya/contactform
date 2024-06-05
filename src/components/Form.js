import React, { useState } from 'react'
import Profile from './pages/Profile'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Profile formData={formData} setFormData={setFormData} handleChange={handleChange}/>
        </div>
    )
}

export default Form