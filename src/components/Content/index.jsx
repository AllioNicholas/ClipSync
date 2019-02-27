// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import ActionButton from './components/ActionButton';

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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

type Props = {};

type State = {
  events: string[],
};

class Content extends React.Component<Props, State> {
  state = {
    events: [],
  };

  handleActionButtonPressed = actionId => {
    Alert.alert('Button pressed:', actionId);
  };

  render() {
    return (
      <StyledContainer>
        <StyledPositives>
          <ActionButton
            title="Button 1"
            onButtonPressed={() => this.handleActionButtonPressed('Button 1')}
          />
          <ActionButton
            title="Button 1"
            onButtonPressed={() => this.handleActionButtonPressed('Button 1')}
          />
          <ActionButton
            title="Button 1"
            onButtonPressed={() => this.handleActionButtonPressed('Button 1')}
          />
          <ActionButton
            title="Button 1"
            onButtonPressed={() => this.handleActionButtonPressed('Button 1')}
          />
        </StyledPositives>
        <StyledNegatives>
          <ActionButton
            title="Button 2"
            onButtonPressed={() => this.handleActionButtonPressed('Button 2')}
          />
          <ActionButton
            title="Button 2"
            onButtonPressed={() => this.handleActionButtonPressed('Button 2')}
          />
          <ActionButton
            title="Button 2"
            onButtonPressed={() => this.handleActionButtonPressed('Button 2')}
          />
          <ActionButton
            title="Button 2"
            onButtonPressed={() => this.handleActionButtonPressed('Button 2')}
          />
        </StyledNegatives>
      </StyledContainer>
    );
  }
}

export default Content;
