import React, { useEffect, useState } from 'react';

import {
  Ionicons,
  AntDesign,
  Fontisto,
  Entypo,
  FontAwesome5,
} from '@expo/vector-icons';
import { Alert } from 'react-native';

import { api } from '../../api';
import { CustomButton } from '../../components/CustomButton';
import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  BoxButton,
  BoxCard,
  BoxValues,
  Cash,
  Container,
  Date,
  Detail,
  EventsList,
  Price,
  TicketValue,
  User,
  Values,
  ValuesText,
} from './styles';

export function Cart() {
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
      <HeaderDefault title={'Carrinho de compras'} onPressBag={() => {}} />
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
            showButton
          >
            <User>
              <Ionicons name="time-outline" size={18} color="#7C7C8A" />
              <Date>
                {formatDateInDayMonthAndHour(item.dateTime)}
                {'h'}
              </Date>
            </User>
            <User>
              <AntDesign name="user" size={18} color="green" />
              <Date>{'User'}</Date>
            </User>
            <User>
              <Fontisto name="email" size={18} color="green" />
              <Date>{'Email'}</Date>
            </User>
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
      <BoxValues>
        <ValuesText>
          <Detail>Total carrinho: </Detail>
        </ValuesText>
        <Values>{formatCurrencyBRL(50)}</Values>
      </BoxValues>
      <BoxButton>
        <CustomButton
          onPress={() => Alert.alert('Compra realizada com sucesso')}
          title={'Finalizar compra'}
        />
      </BoxButton>
    </Container>
  );
}
