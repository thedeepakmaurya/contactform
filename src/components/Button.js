import React from 'react';

const Button = ({ step }) => {

  const steps = ["Your Profile", "Business Information", "Additional Users"];

  return (
    <div className='flex bg-indigo-50 sm:w-[92%] w-[55%] h-14 rounded-t-xl sm:pr-2'>
      {steps.map((stepName, index) => (
        <div
          className={`flex rounded-t-xl items-center justify-center w-full h-full ${step === index + 1 ? "bg-indigo-600 rounded-r-full " : index < step ? 'bg-indigo-600 rounded-r-none' : ''}`} key={index}>
          <div className={`sm:text-[8px] flex justify-center sm:w-3 sm:h-3 w-5 h-5 text-xs mr-2 items-center text-white rounded-full ${step === index + 1 ? 'bg-white text-indigo-600' : 'bg-indigo-300'}`}>
            {index + 1}
          </div>
          <p className={`sm:text-xs text-md font-bold ${step === index + 1 ? 'text-white' : 'text-indigo-300'}`}>{stepName}</p>
        </div>
      ))}
    </div>
  );
};

export default Button;
