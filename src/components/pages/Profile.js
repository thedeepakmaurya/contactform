import React from 'react'

const Profile = ({ formData, setFormData, handleChange }) => {
    return (
        <>
            <div className='flex items-center justify-center gap-44 bg-indigo-50 w-1000px h-14 rounded-t-xl'>
                <button className='text-md text-indigo-200 font-bold'>Your Profile</button>
                <button className='text-md text-indigo-200 font-bold'>Business Information</button>
                <button className='text-md text-indigo-200 font-bold'>Additional Users</button>
            </div>
            <div className=' flex flex-col items-center w-[1000px]  pt-8 h-[500px] bg-white shadow-xl shadow-gray-400 rounded-b-xl'>

                <div className='flex flex-col items-center w-[450px]'>
                    <h2 className='text-xl text-indigo-200'>Step 1</h2>
                    <h1 className='text-2xl text-indigo-900 mb-3'>Your Profile</h1>
                    <p className='text-md text-indigo-900 text-center'>Enter the login information for your account. You will be able to create additional users after registering.</p>
                </div>
                <form className='w-[700px]'>
                    <div className='flex gap-6 mt-5 w-full'>
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
                <div className='flex items-center justify-between w-[1000px] mt-24 pb-10'>
                    <div>
                        <button className='text-sky-400'><i className='bx bx-chevron-left align-middle'></i>Back to Login</button>
                    </div>
                    <div className='flex gap-5'>
                        <button className='border border-indigo-400 pl-8 pr-8 pt-1 pb-1 rounded-md  bg-indigo-400 text-white'>Next Step<i className='bx bx-chevron-right align-middle'></i></button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Profile