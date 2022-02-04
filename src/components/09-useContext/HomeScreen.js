<<<<<<< HEAD
import React from 'react';

export const HomeScreen = () => {
  return (
    <>
      <h1>HomeScreen</h1>
      <hr />
    </>
  );
=======
import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const HomeScreen = () => {
  const UserContext = useContext(UserContext);
  //console.log(UserContext);
  return <div>
    <h1>HomeScreen</h1>
    <hr/>
  </div>;
>>>>>>> 95a371e6f252cf557635e1f366df3620a2481d69
};
