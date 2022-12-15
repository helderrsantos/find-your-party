import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components';

import { CustomButton } from '../../components/CustomButton';
import { HeaderDefault } from '../../components/Header';
import { InlineText } from '../../components/InlineText';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addNewTicket } from '../../redux/reducers/cart';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  Amount,
  BoxCard,
  BoxValues,
  Button,
  Card,
  CardThumbnail,
  Contactor,
  Container,
  Counter,
  Description,
  Detail,
  Event,
  EventName,
  ImageParty,
  Input,
  Values,
  ValuesText,
} from './styles';

export function Details({ navigation, route }) {
  const { event } = route.params;
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const iconConfig = {
    color: theme.colors.white100,
    size: 16,
    style: { margin: 18 },
  };

  function increment() {
    setCount(prevState => prevState + 1);
  }
  function decrement() {
    if (count !== 1) {
      setCount(prevState => prevState - 1);
    }
  }

  function handleBuyTicket() {
    dispatch(
      addNewTicket({
        id: String(uuid.v4()),
        event,
        comprador: { name, email },
        tickets: count,
        amount: event.ticket_price * count,
      }),
    );
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <HeaderDefault
        title={'Evento'}
        onPressBag={() => navigation.navigate('Cart')}
      />
      <Card showsVerticalScrollIndicator={true}>
        <ImageParty>
          <CardThumbnail source={{ uri: event.thumbnail }} />
        </ImageParty>

        <Event>{event.eventLocal}</Event>
        <EventName>{event.eventAttraction}</EventName>
        <BoxCard>
          <InlineText
            icon={
              <Ionicons
                name="time-outline"
                size={18}
                color={theme.colors.gray50}
              />
            }
          >
            {`${formatDateInDayMonthAndHour(event.dateTime)} h`}
          </InlineText>
        </BoxCard>
        <Detail>Detalhes</Detail>
        <Description>{event.description}</Description>
        <Detail>Dados do titular</Detail>
        <Input
          onChangeText={setName}
          value={name}
          placeholder="Nome Completo"
          placeholderTextColor={theme.colors.gray50}
          maxLength={40}
        />
        <Input
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={theme.colors.gray50}
          maxLength={40}
        />
        <Detail>Quantidade</Detail>
        <Amount>
          <Button onPress={decrement}>
            <Ionicons name="remove-circle-outline" {...iconConfig} />
          </Button>
          <Contactor>
            <Counter>{count}</Counter>
          </Contactor>
          <Button onPress={increment}>
            <Ionicons name="add-circle-outline" {...iconConfig} />
          </Button>
        </Amount>
        <BoxValues>
          <ValuesText>
            <Detail>Total compra: </Detail>
          </ValuesText>
          <Values>{formatCurrencyBRL(event.ticket_price * count)}</Values>
        </BoxValues>
        <CustomButton
          title="Comprar ingresso"
          onPress={handleBuyTicket}
          disabled={!name || !email}
        />
      </Card>
    </Container>
  );
}
