import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/global.scss';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import Footer from './components/layout/footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSidebarOpen = () => setIsSidebarOpen((val) => !val);
  
  return (
    <div className='app'>
      <Header onMenuClick={handleSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Footer />
    </div>
  );
}

export default App;
