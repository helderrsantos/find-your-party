import React from 'react';

import { Button, Container, TitleHeader } from './styles';

export function Events({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Details')}>
        <TitleHeader>Second page</TitleHeader>
      </Button>
    </Container>
  );
}
