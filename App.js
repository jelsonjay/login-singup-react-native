import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import Routes from './src/router/Route';

const App = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
};

export default App;
