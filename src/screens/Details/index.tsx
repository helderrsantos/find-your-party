import React from 'react';

import { Button, Container, TitleHeader } from './styles';

export function Details({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Cart')}>
        <TitleHeader>Details page</TitleHeader>
      </Button>
    </Container>
  );
}
