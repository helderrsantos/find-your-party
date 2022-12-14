import React from 'react';

import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from '@expo/vector-icons';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import { CustomButton } from '../../components/CustomButton';
import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { InlineText } from '../../components/InlineText';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { removeTicket } from '../../redux/reducers/cart';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import {
  BoxButton,
  BoxCard,
  BoxValues,
  Container,
  Detail,
  EventsList,
  Values,
  ValuesText,
} from './styles';

export function Cart() {
  const tickets = useAppSelector(state => state.cart.tickets);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const iconConfig = {
    color: theme.colors.green100,
    size: 18,
  };

  const totalAmount = tickets.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0,
  );

  function handleDelete(id: string) {
    dispatch(removeTicket({ id }));
  }

  return (
    <Container>
      <HeaderDefault title={'Carrinho de compras'} onPressBag={() => {}} />
      <EventsList
        data={tickets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            eventLocal={item.event.eventLocal}
            eventAttraction={item.event.eventAttraction}
            onPressButton={() => handleDelete(item.id)}
            buttonTitle={'Remover ingresso'}
            type={'delete'}
            showButton
          >
            <InlineText
              icon={
                <Ionicons
                  name="time-outline"
                  {...iconConfig}
                  color={theme.colors.gray50}
                />
              }
            >
              {`${formatDateInDayMonthAndHour(item.event.dateTime)}h`}
            </InlineText>
            <InlineText icon={<AntDesign name="user" {...iconConfig} />}>
              {item.comprador.name}
            </InlineText>
            <InlineText icon={<Fontisto name="email" {...iconConfig} />}>
              {item.comprador.email}
            </InlineText>
            <BoxCard>
              <InlineText icon={<Entypo name="ticket" {...iconConfig} />}>
                {`${item.tickets} unidades`}
              </InlineText>
              <InlineText
                icon={<FontAwesome5 name="money-bill-alt" {...iconConfig} />}
              >
                {formatCurrencyBRL(item.event.ticket_price)}
              </InlineText>
            </BoxCard>
          </EventCard>
        )}
      />
      <BoxValues>
        <ValuesText>
          <Detail>Total carrinho: </Detail>
        </ValuesText>
        <Values>{formatCurrencyBRL(totalAmount)}</Values>
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
