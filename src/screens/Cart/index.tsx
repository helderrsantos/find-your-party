import React from 'react';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import { Bag } from '../../components/Bag';
import { CustomButton } from '../../components/CustomButton';
import {
  Box,
  BoxCard,
  BoxUser,
  Card,
  Cash,
  Container,
  Date,
  DateTime,
  Event,
  EventName,
  EventTitle,
  Header,
  IconMoney,
  Price,
  User,
} from './style';

export function Cart({ navigation }) {
  return (
    <Container>
      <Header>
        <Box onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={24} color="white" />
        </Box>
        <EventTitle>{'Carrinho de compras'}</EventTitle>
        <Bag />
      </Header>
      <Card>
        <Event>{'teste'}</Event>
        <EventName>{'sem abuso'}</EventName>
        <BoxCard>
          <DateTime>
            <Ionicons name="time-outline" size={18} color="#7C7C8A" />
            <Date>{14 / 12}</Date>
          </DateTime>
          <Cash>
            <IconMoney source={require('../../assets/cash.png')} />
            <Price>R${250},00</Price>
          </Cash>
        </BoxCard>
        <BoxUser>
          <AntDesign name="user" size={18} color="green" />
          <User>{'Helder Santos'}</User>
        </BoxUser>
        <CustomButton
          onPress={() => {}}
          title="Excluir ingresso"
          type="delete"
        />
      </Card>
    </Container>
  );
}
