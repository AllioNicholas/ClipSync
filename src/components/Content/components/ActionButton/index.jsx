// @flow strict
import * as React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

const StyledButtonView = styled(TouchableOpacity)`
  flex: 1;
`;

const StyledText = styled(Text)`
  color: red;
`;

type Props = {
  title: string,
  onButtonPressed: () => Void,
};

const ActionButton = ({ title, onButtonPressed }: Props) => (
  <StyledButtonView onPress={onButtonPressed}>
    <StyledText>{title}</StyledText>
  </StyledButtonView>
);

export default ActionButton;
