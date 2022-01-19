import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Root from './navigation/Root';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Root />
    </>
  );
};

export default App;
