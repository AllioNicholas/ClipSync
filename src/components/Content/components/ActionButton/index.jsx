// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';

const StyledTouchableView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-color: grey;
  border-width: 5;
  aspect-ratio: 1.5;
  width: 100%;
  border-radius: 5;
`;

const StyledText = styled.Text`
  color: blue;
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
