import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { PageRouter } from '../home/routes/PageRouter';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/Home' element={<PageRouter />} />
        <Route path='/*' element={<PageRouter />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
};
