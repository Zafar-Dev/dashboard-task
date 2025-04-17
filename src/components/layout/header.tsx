import React from 'react';

interface Props {
  onMenuClick: () => void;
}

const Header: React.FC<Props> = ({ onMenuClick }) => {
  return (
    <header className='header'>
      <button className='menu-icon-mobile' onClick={onMenuClick}>
        Menu
      </button>
      <h1>Site Title</h1>
    </header>
  );
};

export default Header;
