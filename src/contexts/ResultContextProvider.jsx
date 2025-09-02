import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CX_ID = import.meta.env.VITE_CX_ID;

const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type, source = 'google') => {
    setIsLoading(true);
    let url = '';
    let headers = {};

    if (source === 'google') {
      const query = type.replace('/search?q=', '').replace('/images?q=', '');
      const searchType = type.includes('/images') ? '&searchType=image' : '';
      url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${CX_ID}${searchType}`;
    } else if (source === 'youtube') {
      url = `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(type)}&hl=en&gl=US`;
      headers = {
        'x-rapidapi-host': 'youtube138.p.rapidapi.com',
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      };
    }

    try {
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      setResult(data);
      console.log('Fetched result:', data);
    } catch (error) {
      console.error('API fetch error', error);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, result, searchTerm, setSearchTerm, isLoading, setIsLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
export const useResultContext = () => useContext(ResultContext);
