// @flow strict
import React from 'react';
import styled from 'styled-components/native';
import Content from './components/Content';
import * as TimeContext from './services/time/context';

const StyledContainer = styled.View`
  flex: 1;
`;

const App = () => (
  <TimeContext.Provider>
    <StyledContainer>
      <Content />
    </StyledContainer>
  </TimeContext.Provider>
);

export default App;
