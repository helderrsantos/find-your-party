import React, { useEffect, useState } from 'react';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

import { IEventDTO } from '../../@types/event';
import { api } from '../../api';
import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  Container,
  Date,
  Cash,
  Price,
  DateTime,
  BoxCard,
  EventsList,
} from './styles';

export function Events({ navigation, route }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = route.params;

  const headerTitle = {
    clubbing: 'Balada',
    shows: 'Shows nacionais',
    theater: ' Teatro',
    university: 'Universidade',
  };

  async function fetchEvents() {
    try {
      const response = await api.get<IEventDTO[]>(
        `/events?category=${category}`,
      );
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container>
      <HeaderDefault
        title={headerTitle[category]}
        onPressBag={() => navigation.navigate('Cart')}
      />
      {loading ? (
        <ActivityIndicator style={{ justifyContent: 'center', flex: 1 }} />
      ) : (
        <>
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
                showButton
              >
                <BoxCard>
                  <DateTime>
                    <Ionicons name="time-outline" size={18} color="#7C7C8A" />
                    <Date>
                      {formatDateInDayMonthAndHour(item.dateTime)}
                      {'h'}
                    </Date>
                  </DateTime>
                  <Cash>
                    <FontAwesome5
                      name="money-bill-alt"
                      size={18}
                      color="green"
                    />
                    <Price>{formatCurrencyBRL(item.ticket_price)}</Price>
                  </Cash>
                </BoxCard>
              </EventCard>
            )}
          />
        </>
      )}
    </Container>
  );
}
