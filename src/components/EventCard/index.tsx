import React from 'react';

import { CustomButton } from '../CustomButton';
import { Container, Event, EventName } from './styles';

interface IEventCardProps {
  eventLocal: string;
  eventAttraction: string;
  onPressButton: () => void;
  buttonTitle: string;
  type: 'confirm' | 'delete';
  children?: React.ReactNode;
  showButton: boolean;
}

export function EventCard({
  eventLocal,
  eventAttraction,
  onPressButton,
  buttonTitle,
  type,
  children,
  showButton = true,
}: IEventCardProps) {
  return (
    <Container>
      <Event>{eventLocal}</Event>
      <EventName>{eventAttraction}</EventName>
      {children}
      {showButton ? (
        <CustomButton title={buttonTitle} onPress={onPressButton} type={type} />
      ) : null}
    </Container>
  );
}
