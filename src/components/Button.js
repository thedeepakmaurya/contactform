import React from 'react'

const Button = ({ step, setStep }) => {

    const steps = ["Your Profile", "Business Information", "Additional Users"]

    return (

        <div className='flex bg-indigo-50 sm:w-[380px] w-[1000px] h-14 rounded-t-xl'>
            {
                steps.map((step, index) => (
                    <div className={`flex items-center justify-center w-full h-full ${step === index + 1 ? "active" : ""}`} key={index}>                            <div className=' sm:text-[8px] flex justify-center sm:w-3 sm:h-3 w-5 h-5 text-xs mr-2 items-center text-white bg-indigo-300 rounded-full'>{index + 1}</div>
                        <p className='sm:text-xs text-md text-indigo-300 font-bold'>{step}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default Button