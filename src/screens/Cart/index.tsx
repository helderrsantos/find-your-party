import React from 'react';

import { Button, Container, TitleHeader } from './style';

export function Cart({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Tickets')}>
        <TitleHeader>Cart page</TitleHeader>
      </Button>
    </Container>
  );
}
