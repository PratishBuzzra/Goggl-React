import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Search from './Search'
import Results from './Results'

const Routing = () => {
  return (
    <div className='p-4 '>
      <Routes>
        <Route path='/' element={<Navigate to='/search' replace/>}/>
         <Route path='/search' element={<Results />}/>
         <Route path='images' element={<Results />}/>
          <Route path="/news" element={<Results />} />
            <Route path="/videos" element={<Results />} />
         
      </Routes>
    </div>
  )
}

export default Routing
