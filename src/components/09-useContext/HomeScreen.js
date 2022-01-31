import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const HomeScreen = () => {
  const UserContext = useContext(UserContext);
  //console.log(UserContext);
  return <div>
    <h1>HomeScreen</h1>
    <hr/>
  </div>;
};
