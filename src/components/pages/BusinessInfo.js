import React from 'react'
import Button from '../Button'

const BusinessInfo = ({ formData, setFormData, handleChange, prevStep }) => {
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
                            <label className='text-md text-indigo-900'>Brand Name</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='brandName' value={formData.brandName} onChange={handleChange} placeholder='Input Your Brand Name' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Brand Name</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='brandType' value={formData.brandType} onChange={handleChange} placeholder='Brand Type' required />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Street Address</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='address' value={formData.address} onChange={handleChange} placeholder='Input Your Street Address' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>City</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='city' value={formData.city} onChange={handleChange} placeholder='Input City' required />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Zip Code</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='code' value={formData.code} onChange={handleChange} placeholder='Input Zip Code' required />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='text-md text-indigo-900'>Tax ID Number</label>
                            <input className='outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2' type='text' name='tax' value={formData.tax} onChange={handleChange} placeholder='Input Tax ID Number' required />
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
                    <button className='border border-indigo-400 pl-6 pr-6 pt-2 pb-2 rounded-md  bg-indigo-400 text-white' >Next Step<i className='bx bx-chevron-right align-middle'></i></button>
                </div>
            </div>
        </>
    )
}

export default BusinessInfo