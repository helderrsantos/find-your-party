import React from 'react';

import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

import { EventCard } from '../../components/EventCard';
import { HeaderDefault } from '../../components/Header';
import { InlineText } from '../../components/InlineText';
import { formatCurrencyBRL } from '../../utils/currency';
import { formatDateInDayMonthAndHour } from '../../utils/date';
import { BoxCard, Cash, Container, EventsList } from './styles';

export function Tickets({ navigation, route }) {
  const { tickets } = route.params;

  return (
    <Container>
      <HeaderDefault
        title={'Meus ingressos'}
        onPressBag={() => navigation.navigate('Cart')}
      />
      <EventsList
        data={tickets.flatMap(ticket => ticket.tickets)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            eventLocal={item.event.eventLocal}
            eventAttraction={item.event.eventAttraction}
            onPressButton={() => {}}
            buttonTitle={'Remover ingresso'}
            type={'delete'}
            showButton={false}
          >
            <InlineText
              icon={<Ionicons name="time-outline" size={18} color="#7C7C8A" />}
            >
              {`${formatDateInDayMonthAndHour(item.event.dateTime)} h`}
            </InlineText>

            <BoxCard>
              <InlineText
                icon={<Entypo name="ticket" size={18} color="green" />}
              >
                {`${item.tickets} unidades`}
              </InlineText>

              <Cash>
                <InlineText
                  icon={
                    <FontAwesome5
                      name="money-bill-alt"
                      size={18}
                      color="green"
                    />
                  }
                >
                  {formatCurrencyBRL(item.event.ticket_price)}
                </InlineText>
              </Cash>
            </BoxCard>
          </EventCard>
        )}
      />
    </Container>
  );
}
