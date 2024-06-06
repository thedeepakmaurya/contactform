import React, { useState } from 'react';
import Button from '../Button';

const BusinessInfo = ({ formData, setFormData, step, handleChange, prevStep }) => {

    console.log(step)


    const [isSigned, setIsSigned] = useState({
        agreement: true,
        waiver: false,
        coi: true,
    });

    const [tooltipVisible, setTooltipVisible] = useState(false);

    const toggleSigned = (document) => {
        setIsSigned({ ...isSigned, [document]: !isSigned[document] });
    };

    const toggleTooltip = () => {
        setTooltipVisible(!tooltipVisible);
    };

    return (
        <>
            <Button step={step}/>
            {/* Form */}
            <div className='flex flex-col items-center sm:w-[92%] w-[55%] pt-8 sm:h-[745px] h-[830px] bg-white shadow-xl shadow-gray-400 rounded-b-xl'>
                <div className='flex flex-col items-center sm:w-[85%] w-[50%]'>
                    <h2 className='sm:text-sm text-xl text-indigo-200'>Step 2</h2>
                    <h1 className='sm:text-lg text-2xl text-indigo-900 mb-3'>Business Information</h1>
                    <p className='sm:text-xs text-md text-indigo-900 text-center'>
                        Please, enter information about your company
                    </p>
                </div>
                <form className='w-[70%] sm:pr-5 sm:w-[90%]'>
                    <p className='sm:text-xs mt-10 text-md text-sky-400 '>GENERAL INFORMATION</p>
                    <div className='flex gap-6 mt-2 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='sm:text-xs text-md text-indigo-900'>Brand Name</label>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='brandName'
                                value={formData.brandName}
                                onChange={handleChange}
                                placeholder='Input Your Brand Name'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <div className='flex'>
                                <label className='sm:text-xs text-md text-indigo-900'>Brand Type</label>
                                {/* Tooltip */}
                                <div className='flex items-center sm:flex-col tooltip-container relative cursor-pointer' onClick={toggleTooltip}>
                                    <i className=' bg-slate-500 sm:text-xs rounded-full ml-2 sm:h-3  sm:w-3 text-white bx bx-question-mark'></i>
                                    {tooltipVisible && (
                                        <div className='tooltip-content absolute text-xs z-10 sm:-translate-x-56 sm:translate-y-4 sm:w-72 w-[350px] ml-2 p-2 bg-slate-800 text-white bg-opacity-50 left-5 rounded-md'>
                                            Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less.
                                            <br />
                                            <br />
                                            National: Brands with distribution in 4 or more divisions or in more than 150 stores.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='brandType'
                                value={formData.brandType}
                                onChange={handleChange}
                                placeholder='Input Brand Type'
                                required
                            />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='sm:text-xs text-md text-indigo-900'>Street Address</label>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                                placeholder='Input Your Street Address'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='sm:text-xs text-md text-indigo-900'>City</label>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                                placeholder='Input City'
                                required
                            />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-5 w-full'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='sm:text-xs text-md text-indigo-900'>Zip Code</label>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='code'
                                value={formData.code}
                                onChange={handleChange}
                                placeholder='Input Zip Code'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className='sm:text-xs text-md text-indigo-900'>Tax ID Number</label>
                            <input
                                className='sm:text-xs outline-none rounded-md border border-gray-300 focus:border-sky-300 p-2'
                                type='text'
                                name='tax'
                                value={formData.tax}
                                onChange={handleChange}
                                placeholder='Input Tax ID Number'
                                required
                            />
                        </div>
                    </div>
                </form>

                <div className='w-[70%] sm:pr-8 sm:pl-8 sm:w-full'>
                    <p className='sm:text-xs mt-6 text-md text-sky-400 '>DOCUMENTS</p>
                    <p className='sm:text-xs mt-2 text-indigo-900'>
                        Once the following documents are signed, you'll be ready to get started
                    </p>
                    <div className='flex mt-1 gap-5'>
                        <p className='sm:text-xs relative border text-indigo-900 border-gray-300 pt-2 pb-2 pl-4 pr-4 rounded-md w-full' onClick={() => toggleSigned('agreement')}>
                            Electronically sign the agreements{' '}
                            <span className='cursor-pointer absolute right-0 pr-2'>
                                {isSigned.agreement ? (
                                    <i className='bx bx-check bx-sm align-middle' style={{ color: '#00ff2c' }}></i>
                                ) : (
                                    <i className='bx bx-x bx-sm align-middle' style={{ color: '#ff0000' }}></i>
                                )}
                            </span>
                        </p>{' '}
                        <span className='border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md'>
                            <i className='bx bx-chevron-right align-middle'></i>
                        </span>
                    </div>
                    <div className='flex mt-5 gap-5'>
                        <p className='sm:text-xs relative border text-indigo-900 border-gray-300 pt-2 pb-2 pl-4 pr-4 rounded-md w-full' onClick={() => toggleSigned('waiver')}>
                            Non adult beverage Kroger market supplier waiver and release{' '}
                            <span className='cursor-pointer absolute right-0 pr-2'>
                                {isSigned.waiver ? (
                                    <i className='bx bx-check bx-sm align-middle' style={{ color: '#00ff2c' }}></i>
                                ) : (
                                    <i className='bx bx-x bx-sm align-middle' style={{ color: '#ff0000' }}></i>
                                )}
                            </span>
                        </p>{' '}
                        <span className='border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md'>
                            <i className='bx bx-chevron-right align-middle'></i>
                        </span>
                    </div>

                    <p className='sm:text-xs mt-5 text-md text-sky-400 '>COI PDF UPLOAD</p>
                    <p className='sm:text-xs mt-2 text-indigo-900'>
                        Once the following documents are signed, you'll be ready to get started
                    </p>
                    <div className='flex mt-1 gap-5'>
                        <p className='sm:text-xs relative border text-indigo-900 border-gray-300 pb-2 pt-2 pl-4 pr-4 rounded-md w-full' onClick={() => toggleSigned('coi')}>
                            Electronically sign the agreements{' '}
                            <span className='cursor-pointer absolute right-0 pr-2'>
                                {isSigned.coi ? (
                                    <i className='bx bx-check bx-sm align-middle' style={{ color: '#00ff2c' }}></i>
                                ) : (
                                    <i className='bx bx-x bx-sm align-middle' style={{ color: '#ff0000' }}></i>
                                )}
                            </span>
                        </p>{' '}
                        <span className='border border-indigo-400 bg-indigo-400 text-white p-2 pl-3 pr-3 rounded-md'>
                            <i className='bx bx-chevron-right align-middle'></i>
                        </span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className='flex items-center justify-between sm:w-[90%] w-[55%] sm:mt-8 mt-10 pb-10'>
                <div>
                    <button className='sm:text-xs text-sky-400'>
                        <i className='bx bx-chevron-left align-middle'></i>Back to Login
                    </button>
                </div>
                <div className='flex gap-3'>
                    <button
                        className='sm:text-xs border border-indigo-400 pl-6 pr-6 pt-2 pb-2 sm:pl-4 sm:pt-[5px] sm:pb-[5px] sm:pr-4 rounded-md text-indigo-400 hover:bg-indigo-400 hover:text-white'
                        onClick={prevStep}
                    >
                        <i className='bx bx-chevron-left align-middle'></i>Previous Step
                    </button>
                    <button className='sm:text-xs border border-indigo-400 pl-6 pr-6 pt-2 pb-2 sm:pl-4 sm:pt-[5px] sm:pb-[5px] sm:pr-4 rounded-md bg-indigo-400 text-white'>
                        Next Step<i className='bx bx-chevron-right align-middle'></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BusinessInfo;
