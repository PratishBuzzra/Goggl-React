import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { result, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/images') {
        getResults(`/images?q=${searchTerm}`, 'google');
      } else if (location.pathname === '/videos') {
        getResults(searchTerm, 'youtube');
      } else {
        getResults(`/search?q=${searchTerm}`, 'google');
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {result?.items?.map(({ link, title, snippet }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm text-gray-500">
                  {link.length > 40 ? link.substring(0, 40) + '...' : link}
                </p>
                <p className="text-lg font-medium hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm text-gray-600">{snippet}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {result?.items?.map(({ link, title, image }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <img
                src={image?.thumbnailLink}
                alt={title}
                loading="lazy"
                className="w-full h-32 object-cover rounded"
              />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    case '/videos':
      return (
        <div className='flex flex-wrap justify-center items-center'>
      {result?.contents?.map((item, index) => {
        const video = item?.video;
        if (!video) return null;

        return (
          <div key={index} className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target='_blank' rel='noreferrer'>
              <img src={video.thumbnails?.[0]?.url} alt={video.title} className='w-full h-40 object-cover rounded' />
              <p className='mt-2 text-sm'>{video.title}</p>
            </a>
          </div>
        );
      })}
    </div>
      );

    default:
      return 'ERROR!';
  }
};

export default Results;
