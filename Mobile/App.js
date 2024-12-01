import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigator/root'

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}