import React, { useEffect, useState} from 'react'

import { Loader, Card, FormField } from '../components';

const RenderCards = ({data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
}

  return (
    <h2 className='mt-5 font-bold text-[#666e75] text-xl uppercase'>{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState (null);

  const[searchText, setSearchText] = useState('');

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://dalle-arbb.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

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
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
            </div>
        ) : (
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
  );
};

export default Home