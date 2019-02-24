// @flow strict
import * as React from 'react';
import styled from 'styled-components';
import { View, Alert } from 'react-native';
import ActionButton from './components/ActionButton';

const StyledContainer = styled(View)`
  flex: 1;
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
        <ActionButton
          title="Button 1"
          onButtonPressed={this.handleActionButtonPressed('Button 1')}
        />
        <ActionButton
          title="Button 2"
          onButtonPressed={this.handleActionButtonPressed('Button 2')}
        />
      </StyledContainer>
    );
  }
}

export default Content;
