import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, TitleButton } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function EventButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TitleButton>{title}</TitleButton>
    </Container>
  );
}
