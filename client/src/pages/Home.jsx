import React, { useState, useEffect} from 'react'

import { Loader, Card, FormField } from '../components';

const RenderCards = ({data, title }) => { // 'data' & 'title' are params
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />) // Pass post data to each card
  }

  return (
    <h2 className='mt-5 font-bold text-[#666e75] text-xl uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false); // Loading icon
  const [allPosts, setAllPosts] = useState (null);

  const[searchText, setSearchText] = useState(''); // Search text ('Showing Results for test")

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-semibold text-[#222328] text-[32px]'>
          Community Gallery</h1>
          <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
          Welcome to our Community Gallery, where the creative potential of AI brings art to life. Explore and be inspired by a world of imaginative and visually stunning art.          </p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? ( // if we are loading (ternary operator '?'), render div
          <div className='flex justify-center items-center'>
            <Loader />
            </div>
        ) : ( // or operator ':' because of ternary operator (can be empty-prevents error)
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing Results for <span className='text-[#222328]'>{searchText}</span>
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1
            gap-3'>
              {searchText ? (
                <RenderCards
                  data={[]} 
                  title='No search results found'
                />
              ) : (
                <RenderCards 
                  data={[]}
                  title='No posts found'
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home