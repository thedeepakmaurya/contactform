import React from 'react'

const Button = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-44 bg-indigo-50 w-[1000px] h-14 rounded-t-xl'>
                <button className='text-md text-indigo-300 font-bold'>Your Profile</button>
                <button className='text-md text-indigo-300 font-bold'>Business Information</button>
                <button className='text-md text-indigo-300 font-bold'>Additional Users</button>
            </div>
        </>
    )
}

export default Button