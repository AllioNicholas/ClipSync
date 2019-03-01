// @flow strict
import * as React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { POSITIVE_EVENTS, NEGATIVE_EVENTS, getLog, clearEvents } from '../../services/events';
import ActionButton from './components/ActionButton';
import * as TimeContext from '../../services/time/context';
import { formatElapsedTime } from '../../services/time/helpers';

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
`;

const StyledTimerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: 150;
`;

const StyledTimerText = styled.Text`
  font-size: 45;
`;

const StyledButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 20px;
`;

const StyledPositives = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #90ee90;
`;

const StyledNegatives = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f08080;
`;

const Content = () => (
  <TimeContext.Consumer>
    {({ elapsedTime, toggleTimer, resetTimer }) => (
      <StyledContainer>
        <Button title="Print log" onPress={() => getLog().then(log => console.log(log))} />
        <Button title="Clear log" onPress={() => clearEvents()} />
        <StyledTimerContainer>
          <TouchableOpacity onPress={() => toggleTimer()} onLongPress={() => resetTimer()}>
            <StyledTimerText>{formatElapsedTime(elapsedTime)}</StyledTimerText>
          </TouchableOpacity>
        </StyledTimerContainer>
        <StyledButtonContainer>
          <StyledPositives>
            {Object.keys(POSITIVE_EVENTS).map(eventName => (
              <ActionButton
                key={eventName}
                buttonEvent={{ ...POSITIVE_EVENTS[eventName], timestamp: elapsedTime }}
              />
            ))}
          </StyledPositives>
          <StyledNegatives>
            {Object.keys(NEGATIVE_EVENTS).map(eventName => (
              <ActionButton
                key={eventName}
                buttonEvent={{ ...NEGATIVE_EVENTS[eventName], timestamp: elapsedTime }}
              />
            ))}
          </StyledNegatives>
        </StyledButtonContainer>
      </StyledContainer>
    )}
  </TimeContext.Consumer>
);

export default Content;
