import React from 'react'

const Button = () => {
    return (
        <div className='flex items-center justify-between w-[650px]'>
            <div>
                <button className='text-sky-400'><i className='bx bx-chevron-left align-middle'></i>Back to Login</button>
            </div>
            <div className='flex gap-5'>
                <button className='border border-indigo-400 pl-4 pr-4 pt-1 pb-1 rounded-md text-indigo-400 hover:bg-indigo-400 hover:text-white'><i className='bx bx-chevron-left align-middle'></i>Previous Step</button>
                <button className='border border-indigo-400 pl-4 pr-4 pt-1 pb-1 rounded-md text-indigo-400 hover:bg-indigo-400 hover:text-white'>Next Step<i className='bx bx-chevron-right align-middle'></i></button>
            </div>
        </div>
    )
}

export default Button