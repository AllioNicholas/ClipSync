// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';

const StyledTouchableView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: grey;
  height: 50;
  width: 200;
  margin: 10px;
  border-radius: 5;
`;

const StyledText = styled.Text`
  color: red;
`;

type Props = {
  title: string,
  onButtonPressed: () => Void,
};

const ActionButton = ({ title, onButtonPressed }: Props) => (
  <StyledTouchableView onPress={onButtonPressed}>
    <StyledText>{title}</StyledText>
  </StyledTouchableView>
);

export default ActionButton;
