import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { CustomButton } from '../../components/CustomButton';
import { HeaderDefault } from '../../components/Header';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  Card,
  Container,
  Event,
  EventName,
  Date,
  DateTime,
  BoxCard,
  CardThumbnail,
  ImageParty,
  Detail,
  Description,
  Input,
  Amount,
  Button,
  Contactor,
  Counter,
  Values,
  BoxValues,
  ValuesText,
} from './styles';

export function Details({ navigation, route }) {
  const { event } = route.params;
  const theme = useTheme();

  return (
    <Container>
      <HeaderDefault
        title={'Evento'}
        onPressBag={() => navigation.navigate('Tickets')}
      />
      <ImageParty>
        <CardThumbnail source={{ uri: event.thumbnail }} />
      </ImageParty>
      <Card>
        <Event>{event.eventLocal}</Event>
        <EventName>{event.eventAttraction}</EventName>
        <BoxCard>
          <DateTime>
            <Ionicons name="time-outline" size={18} color="#7C7C8A" />
            <Date>{formatDateInDayMonthAndHour(event.dateTime)}</Date>
          </DateTime>
        </BoxCard>
        <Detail>Detalhes</Detail>
        <Description>{event.description}</Description>
        <Detail>Dados do titular</Detail>
        <Input
          placeholder="Nome Completo"
          placeholderTextColor={theme.colors.gray50}
          maxLength={40}
        />
        <Input
          placeholder="Email"
          placeholderTextColor={theme.colors.gray50}
          maxLength={40}
        />
        <Detail>Quantidade</Detail>
        <Amount>
          <Button>
            <Ionicons
              name="remove-circle-outline"
              size={16}
              color="white"
              style={{ margin: 18 }}
            />
          </Button>
          <Contactor>
            <Counter>{'0'}</Counter>
          </Contactor>
          <Button>
            <Ionicons
              name="add-circle-outline"
              size={16}
              color="white"
              style={{ margin: 18 }}
            />
          </Button>
        </Amount>
        <BoxValues>
          <ValuesText>
            <Detail>Total compra: </Detail>
          </ValuesText>
          <Values>R$ {event.ticket_price},00</Values>
        </BoxValues>
        <CustomButton
          title="Comprar ingresso"
          onPress={() => navigation.navigate('Cart')}
        />
      </Card>
    </Container>
  );
}
