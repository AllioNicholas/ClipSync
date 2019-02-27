// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';
import { trackEvent } from '../../../../services/events';

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
  actionId: string,
};

const ActionButton = ({ title, actionId }: Props) => (
  <StyledTouchableView onPress={() => trackEvent(actionId)}>
    <StyledText>{title}</StyledText>
  </StyledTouchableView>
);

export default ActionButton;
