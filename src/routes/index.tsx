import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Loadable from '../components/Loadable';
import { lazy } from 'react';

const HomePage = Loadable(lazy(() => import('../pages/home')));
const AboutPage = Loadable(lazy(() => import('../pages/contact-us')));
const ContactPage = Loadable(lazy(() => import('../pages/about')));

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </ReactRoutes>
  );
};

export default Routes;
