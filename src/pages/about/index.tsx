import React, { useEffect, useState } from 'react';
import './index.styles.scss';
import { User } from '../types';
import axios from 'axios';

const AboutPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: any = await axios.get('https://randomuser.me/api/');
        setUser(response?.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div className='content'>Loading...</div>;
  if (error) return <div className='content'>Error: {error}</div>;
  if (!user) return <div className='content'>No user data available</div>;

  return (
    <div className='content'>
      <h1>About Us</h1>
      <div className='content-box'>
        <div className='user-card'>
          <img src={user.picture.large} alt='User' />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
