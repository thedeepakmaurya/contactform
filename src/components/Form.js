import React, { useState } from 'react'
import BusinessInfo from './pages/BusinessInfo'
import Profile from './pages/Profile';
import { useEffect } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        brandName: '',
        brandType: '',
        address: '',
        city: '',
        code: '',
        tax: ''
    })

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);

    // Save form data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

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
            return <Profile formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} step={step} setStep={setStep}/>
        case 2:
            return <BusinessInfo formData={formData} setFormData={setFormData} handleChange={handleChange} prevStep={prevStep} step={step} setStep={setStep}/>
        default:
            <Profile formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={nextStep} setStep={setStep} />
    }

}

export default Form