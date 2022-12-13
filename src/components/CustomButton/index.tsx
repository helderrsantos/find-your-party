import React from 'react';

import { PressableProps } from 'react-native';

import { Container, TitleButton } from './styles';

export interface IButtonProps extends PressableProps {
  onPress: () => void;
  type?: 'confirm' | 'delete';
  title: string;
}

export function CustomButton({
  onPress,
  type = 'confirm',
  title,
  ...rest
}: IButtonProps) {
  return (
    <Container {...rest} onPress={onPress} type={type}>
      <TitleButton>{title}</TitleButton>
    </Container>
  );
}
