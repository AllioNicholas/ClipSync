import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

const StyledView = styled(View)`
  flex: 1;
  backgroundcolor: #fff;
  alignitems: center;
  justifycontent: center;
`;

const App = () => (
  <StyledView>
    <Text>Open up App.js to start working on your app!</Text>
  </StyledView>
);

export default App;
