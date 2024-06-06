import React from 'react'

const Header = () => {
    return (
        <div className="flex items-center justify-center sm:w-[380px] w-[1000px] relative mb-10 text-white">
            <h1 className="sm:text-lg text-xl font-semibold">
                Create New Account
                <span className='sm:text-xs text-sm absolute right-0 top-1'>Contact Us</span>
            </h1>
        </div>
    )
}

export default Header
