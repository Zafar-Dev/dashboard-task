import { Link, useLocation, matchPath } from 'react-router-dom';
import React from 'react';
import Routes from '../../routes';
import menuItems from '../../utils/menu-items';

interface Props {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen }) => {
  const { pathname } = useLocation();

  return (
    <div className='container'>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {menuItems.map((item) => {
              const isSelected = !!matchPath({ path: item.url }, pathname);
              return (
                <NavItem
                  title={item.title}
                  to={item.url}
                  selected={isSelected}
                  key={item.title}
                />
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className='content-area'>
        <Routes />
      </main>
    </div>
  );
};

interface NavItemProps {
  to: string;
  title: string;
  selected: boolean;
}

const NavItem: React.FC<NavItemProps> = (item) => {
  return (
    <li className={`${item.selected ? 'active' : ''}`}>
      <Link to={item.to}>{item.title}</Link>
    </li>
  );
};

export default Sidebar;
