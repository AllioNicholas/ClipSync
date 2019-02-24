// @flow strict
import React from 'react';
import styled from 'styled-components/native';
import Content from './components/Content';

const StyledContainer = styled.View`
  flex: 1;
`;

const App = () => (
  <StyledContainer>
    <Content />
  </StyledContainer>
);

export default App;
