import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Bag } from '../../components/Bag';
import { Logo } from '../Logo';
import { Box, EventTitle, Container } from './styles';

export function HeaderMain({ onPressBag }) {
  return (
    <Container>
      <Logo />
      <Bag onPress={onPressBag} />
    </Container>
  );
}
export function HeaderDefault({ onPressBag, title }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Box onPress={() => navigation.goBack()}>
        <Ionicons name="ios-chevron-back" size={24} color="white" />
      </Box>
      <EventTitle>{title}</EventTitle>
      <Bag onPress={onPressBag} />
    </Container>
  );
}
