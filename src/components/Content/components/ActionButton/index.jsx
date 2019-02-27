// @flow strict
import * as React from 'react';
import styled from 'styled-components/native';
import { trackEvent } from '../../../../services/events';
import type { Event } from '../../../../services/events';

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
  buttonEvent: Event,
};

const ActionButton = ({ buttonEvent }: Props) => (
  <StyledTouchableView onPress={() => trackEvent(buttonEvent)}>
    <StyledText>{buttonEvent.name}</StyledText>
  </StyledTouchableView>
);

export default ActionButton;
