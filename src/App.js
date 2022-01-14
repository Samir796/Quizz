import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Root from './navigation/root/Root';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Root />
    </>
  );
};

export default App;
