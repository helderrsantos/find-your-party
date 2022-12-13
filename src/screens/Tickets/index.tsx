import React, { useEffect, useState } from 'react';

import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

import { api } from '../../api';
import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  BoxCard,
  Cash,
  Container,
  Date,
  DateTime,
  EventsList,
  Price,
  TicketValue,
} from './styles';

export function Tickets({ navigation }) {
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
      <HeaderDefault
        title={'Meus ingressos'}
        onPressBag={() => navigation.navigate('Cart')}
      />
      <EventsList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            eventLocal={item.eventLocal}
            eventAttraction={item.eventAttraction}
            onPressButton={() => {}}
            buttonTitle={'Remover ingresso'}
            type={'delete'}
            showButton={false}
          >
            <DateTime>
              <Ionicons name="time-outline" size={18} color="#7C7C8A" />
              <Date>
                {formatDateInDayMonthAndHour(item.dateTime)}
                {'h'}
              </Date>
            </DateTime>
            <BoxCard>
              <TicketValue>
                <Entypo name="ticket" size={18} color="green" />
                <Date>{2} unidades</Date>
              </TicketValue>
              <Cash>
                <FontAwesome5 name="money-bill-alt" size={18} color="green" />
                <Price>{formatCurrencyBRL(item.ticket_price)}</Price>
              </Cash>
            </BoxCard>
          </EventCard>
        )}
      />
    </Container>
  );
}
