import React, { useState } from 'react'
import BusinessInfo from './pages/BusinessInfo'
import Profile from './pages/Profile';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    switch (step) {
        case 1:
            return <Profile formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} />
        case 2:
            return <BusinessInfo formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        default:
            <Profile formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} />
    }

}

export default Form