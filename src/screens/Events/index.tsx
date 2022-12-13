import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { api } from '../../api';
import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  Container,
  Date,
  IconMoney,
  Cash,
  Price,
  DateTime,
  BoxCard,
  EventsList,
} from './styles';

export function Events({ navigation, route }) {
  const [events, setEvents] = useState([]);
  const { category } = route.params;

  async function fetchEvents() {
    try {
      const response = await api.get(`/events?category=${category}`);

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
      <HeaderDefault
        title={'Eventos'}
        onPressBag={() => navigation.navigate('Tickets')}
      />
      <EventsList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            eventLocal={item.eventLocal}
            eventAttraction={item.eventAttraction}
            onPressButton={() =>
              navigation.navigate('Details', { event: item })
            }
            buttonTitle={'Comprar ingresso'}
            type={'confirm'}
          >
            <BoxCard>
              <DateTime>
                <Ionicons name="time-outline" size={18} color="#7C7C8A" />
                <Date>{formatDateInDayMonthAndHour(item.dateTime)}</Date>
              </DateTime>
              <Cash>
                <IconMoney source={require('../../assets/cash.png')} />
                <Price>{formatCurrencyBRL(item.ticket_price)}</Price>
              </Cash>
            </BoxCard>
          </EventCard>
        )}
      />
    </Container>
  );
}
