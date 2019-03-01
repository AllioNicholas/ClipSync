// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';
import { trackEvent } from '../../../../services/events';
import type { Event } from '../../../../services/events';

const StyledTouchableView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-color: #778899;
  border-width: 3;
  aspect-ratio: 1.5;
  width: 100%;
`;

const StyledText = styled.Text`
  color: #000080;
  font-weight: 900;
`;

type Props = {
  buttonEvent: Event,
};

const ActionButton = ({ buttonEvent }: Props) => (
  <StyledTouchableView onPress={() => trackEvent(buttonEvent)}>
    <StyledText>{buttonEvent.name}</StyledText>
  </StyledTouchableView>
);

export default ActionButton;
