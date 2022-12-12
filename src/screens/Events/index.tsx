import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

import { api } from '../../api';
import { Bag } from '../../components/Bag';
import { CardButton } from '../../components/CardButton';
import {
  Card,
  Container,
  Event,
  EventName,
  Date,
  IconMoney,
  Cash,
  Price,
  DateTime,
  Box,
  EventTitle,
  Header,
  BoxCard,
} from './styles';

export function Events({ navigation }) {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    try {
      const response = await api.get('/events');

      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container>
      <Header>
        <Box onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={24} color="white" />
        </Box>
        <EventTitle>{'Balada'}</EventTitle>
        <Bag onPress={() => navigation.navigate('Cart')} />
      </Header>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <Event>{item.eventLocal}</Event>
            <EventName>{item.eventAttraction}</EventName>
            <BoxCard>
              <DateTime>
                <Ionicons name="time-outline" size={18} color="#7C7C8A" />
                <Date>{item.dateTime}</Date>
              </DateTime>
              <Cash>
                <IconMoney source={require('../../assets/cash.png')} />
                <Price>R${item.ticket_price},00</Price>
              </Cash>
            </BoxCard>
            <CardButton
              title="Comprar ingresso"
              onPress={() => navigation.navigate('Details')}
            />
          </Card>
        )}
      />
    </Container>
  );
}
