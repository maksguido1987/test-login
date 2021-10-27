import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const ProfilePage = () => {
  const { login } = useSelector((state: RootState) => state.initialReducer);
  return <h1>{login}</h1>;
};

export default ProfilePage;
