import React from 'react';

import { Button, Container, TitleHeader } from './styles';

export function Tickets({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <TitleHeader>Congratulation</TitleHeader>
      </Button>
    </Container>
  );
}
