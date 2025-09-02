import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#3B82F6" size={60} />
    </div>
  );
};

export default Loading;
