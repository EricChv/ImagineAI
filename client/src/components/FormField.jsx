import React from 'react'

const FormField = ({LabelName, type, name, placeholder, value, handleChange,
  isRandomGeneration, handleRandomGeneration
}) => {
  return (
    <div>
      <div className = 'flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {LabelName}
        </label>
        {isRandomGeneration && (
          <button
          type='button'
          onClick={handleRandomGeneration}
          className='font-medium text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px]
          text-black'
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
        focus:ring-[#222328] focus:border-[#222328] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField