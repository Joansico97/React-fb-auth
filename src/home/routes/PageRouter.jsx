import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { HomePage } from '../pages/HomePage';
import { PostsPage } from '../pages/PostsPage';

export const PageRouter = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <hr className='line' />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </>
  );
};
