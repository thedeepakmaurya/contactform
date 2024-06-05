import React from 'react'
import Button from '../Button'

const BusinessInfo = ({ formData, setFormData, handleChange, nextStep, prevStep }) => {
    return (
        <>
            <Button />
            {/* Form */}
            <div className=' flex flex-col items-center w-[1000px]  pt-8 h-[830px] bg-white shadow-xl shadow-gray-400 rounded-b-xl'>

                <div className='flex flex-col items-center w-[450px]'>
                    <h2 className='text-xl text-indigo-200'>Step 2</h2>
                    <h1 className='text-2xl text-indigo-900 mb-3'>Business Information</h1>
                    <p className='text-md text-indigo-900 text-center'>Please, enter information about your company</p>
                </div>
                <form className='w-[700px]'>
                    <p className='mt-10 text-md text-sky-400 '>GENERAL INFORMATION</p>
                    <div className='flex gap-6 mt-2 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>First Name</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='Input Your First Name' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Last Name</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Input Your Last Name' required />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Email</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Input Your Email' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Phone Number</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Input Your Phone Number' required />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Password</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='password' value={formData.password} onChange={handleChange} placeholder='Create Password' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Confirm Password</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Create Your Password' required />
                        </div>
                    </div>
                </form>

                <div className='w-[700px]'>
                    <p className='mt-6  text-md text-sky-400 '>DOCUMENTS</p>
                    <p className='mt-2 text-indigo-900'>Once the following documents are signed, you'll be ready to get started </p>
                    <div className='flex mt-1  gap-5'>
                        <p className='border text-indigo-900 border-gray-300 p-2 rounded-md w-full'>Electronically sign the agreements</p> <span className= "border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md"><i className='bx bx-chevron-right align-middle'></i></span>
                    </div>
                    <div className='flex mt-5  gap-5'>
                        <p className='border text-indigo-900 border-gray-300 p-2 rounded-md w-full'>Non adult beverage Kroger market supplier waiver and release</p> <span className= "border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md"><i className='bx bx-chevron-right align-middle'></i></span>
                    </div>

                    <p className='mt-5 text-md text-sky-400 '>COI PDF UPLOAD</p>
                    <p className='mt-2 text-indigo-900'>Once the following documents are signed, you'll be ready to get started </p>
                    <div className='flex mt-1  gap-5'>
                        <p className='border text-indigo-900 border-gray-300 p-2 rounded-md w-full'>Electronically sign the agreements</p> <span className= "border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md"><i className='bx bx-chevron-right align-middle'></i></span>
                    </div>

                </div>
            </div>


            {/* Button */}
            <div className='flex items-center justify-between w-[1000px] mt-10 pb-10'>
                <div>
                    <button className='text-sky-400'><i className='bx bx-chevron-left align-middle' ></i>Back to Login</button>
                </div>
                <div className='flex gap-5'>
                    <button className='border border-indigo-400 pl-6 pr-6 pt-2 pb-2 rounded-md text-indigo-400 hover:bg-indigo-400 hover:text-white' onClick={prevStep}><i className='bx bx-chevron-left align-middle'></i>Previous Step</button>
                    <button className='border border-indigo-400 pl-6 pr-6 pt-2 pb-2 rounded-md  bg-indigo-400 text-white' onClick={nextStep}>Next Step<i className='bx bx-chevron-right align-middle'></i></button>
                </div>
            </div>
        </>
    )
}

export default BusinessInfo