import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Button, Container, TitleButton } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function CardButton({ title, onPress, ...rest }: Props) {
  return (
    <Container>
      <Button onPress={onPress} {...rest}>
        <TitleButton>{title}</TitleButton>
      </Button>
    </Container>
  );
}
