import React from 'react';

import { Button, Container, TitleHeader } from './styles';

export function Home({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Events')}>
        <TitleHeader>Hello World</TitleHeader>
      </Button>
    </Container>
  );
}
