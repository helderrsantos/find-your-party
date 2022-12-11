import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Button, Container, TitleButton } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function EventButton({ title, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest}>
        <TitleButton>{title}</TitleButton>
      </Button>
    </Container>
  );
}
