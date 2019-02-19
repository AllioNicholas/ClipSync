import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';

const StyledView = styled(View)`
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>Open up App.js to start working on your app!</Text>
      </StyledView>
    );
  }
}
