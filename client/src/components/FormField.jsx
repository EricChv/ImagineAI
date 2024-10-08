import React from 'react'

const FormField = ({LabelName, type, name, placeholder, value, handleChange,
  isSurpriseMe, handleSurpriseMe,
}) => {
  return (
    <div>
      <div className = 'flex items-center gap-5 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900
        dark:text-white'>
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
          type='button'
          onClick={handleSurpriseMe}
          className='font-medium text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px]
          text-black dark:text-white dark:bg-medium'
          >
            Random
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-[#222328] focus:border-[#222328] outline-none block w-full p-3
        dark:bg-medium dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-[#e9e9e9] dark:focus:border-[#e9e9e9]'
      />
    </div>
  )
}

export default FormField