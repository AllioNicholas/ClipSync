// @flow strict
import * as React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { POSITIVE_EVENTS, NEGATIVE_EVENTS, getLog, clearEvents } from '../../services/events';
import ActionButton from './components/ActionButton';

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
`;

const StyledButtonContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 20px;
`;

const StyledPositives = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const StyledNegatives = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Content = () => (
  <StyledContainer>
    <Button title="Print log" onPress={() => getLog().then(log => console.log(log))} />
    <Button title="Clear log" onPress={() => clearEvents()} />
    <StyledButtonContainer>
      <StyledPositives>
        {Object.keys(POSITIVE_EVENTS).map(eventName => (
          <ActionButton key={eventName} buttonEvent={POSITIVE_EVENTS[eventName]} />
        ))}
      </StyledPositives>
      <StyledNegatives>
        {Object.keys(NEGATIVE_EVENTS).map(eventName => (
          <ActionButton key={eventName} buttonEvent={NEGATIVE_EVENTS[eventName]} />
        ))}
      </StyledNegatives>
    </StyledButtonContainer>
  </StyledContainer>
);

export default Content;
