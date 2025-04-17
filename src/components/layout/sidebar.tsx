import { Link } from 'react-router-dom';
import React from 'react';
import Routes from '../../routes';

interface Props {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen }) => {
  return (
    <div className='container'>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className='content-area'>
        <Routes />
      </main>
    </div>
  );
};

export default Sidebar;
