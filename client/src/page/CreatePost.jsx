import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false); 

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://localhost:8080/api/v1/dalle', {
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: 'data:image/jpeg;base64,${data.photo}'});
      } catch (error) {
          alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  const handleSubmit = () => {

  };
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt: randomPrompt})
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='font-semibold text-[#222328] text-[32px]'>
          Create</h1>
          <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
            Create images with the help of AI and share your designs with the community.
          </p>
      </div>
          
          <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5'>
              
              <FormField
              LabelName='Your name'
              type='text'
              name='name'
              placeholder='Alan Turing'
              value={form.name}
              handleChange={handleChange}
              />

              <FormField
              LabelName='Prompt'
              type='text'
              name='prompt'
              placeholder='a contemporary museum in Paris'
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
              />

              <div className='relative bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg 
              focus:ring-black focus:border-black w-64 p-3 h-64
              flex justify-center items-center'>
                {form.photo ? (
                  <img
                  src={form.photo}
                  alt={form.prompt}
                  className='w-full h-full object-contain'
                  />
                ) : (
                  <img
                    src={preview}
                    alt='preview'
                    className='w-9/12 h-9/12 object-contain opacity-20'
                  />
                )}

                {generatingImg && (
                  <div className='absolute inset-0 z-0 flex justify-center
                  items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                  <Loader />
                  </div>
                )}
              </div>
            </div>

            <div className='mt-5 flex gap-5'>
              <button
              type="button"
              onClick={generateImage}
              className='text-black bg-[#ECECF1] font-medium rounded-md text-sm w-full sm:w-auto
              px-5 py-2.5 text-center'
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
            </div>

            <div className='mt-10'>
              <p className='mt-2 text-[#666e75] text-[14px]'>Once you've created your image, feel free to
                share it with the community.</p>
              <button
              type='submit'
              className='mt-3 text-white bg-[#222328] font-light rounded-md text-sm w-full sm:w-auto px-5
              py-2.5 text-center'
              >
                {loading ? 'Sharing...' : 'Share with the community'}
              </button>
            </div>
          </form>
    </section>
  )
}

export default CreatePost