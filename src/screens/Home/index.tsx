import React, { useEffect, useState } from 'react';

import '../../translation/i18next';
import { Entypo } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { api } from '../../api';
import { EventButton } from '../../components/EventButton';
import { HeaderMain } from '../../components/Header';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IUserTickets } from '../Cart';
import {
  ContactorBox,
  Container,
  Counter,
  EventBox,
  Footer,
  FooterContactor,
  FooterMain,
  FooterText,
} from './styles';

export function Home({ navigation }) {
  const [tickets, setTickets] = useState<IUserTickets[]>([]);
  const userId = useAppSelector(state => state.user.id);
  const theme = useTheme();
  const { t } = useTranslation();
  const handleNavigation = category => {
    return navigation.navigate('Events', { category });
  };
  const totalTickets = tickets.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount_tickets,
    0,
  );
  async function fetchMyTickets() {
    try {
      const response = await api.get<IUserTickets[]>(
        `/user_tickets?user_id=${userId}`,
      );
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMyTickets();
  });

  return (
    <Container>
      <HeaderMain onPressBag={() => navigation.navigate('Cart')} />
      <EventBox>
        <EventButton
          onPress={() => handleNavigation('clubbing')}
          title={t('HomeScreen.Balada')}
        />
        <EventButton
          onPress={() => handleNavigation('shows')}
          title={t('HomeScreen.Shows Nacionais')}
        />
        <EventButton
          onPress={() => handleNavigation('theater')}
          title={t('HomeScreen.Teatro')}
        />
        <EventButton
          onPress={() => handleNavigation('university')}
          title={t('HomeScreen.Universidade')}
        />
      </EventBox>

      <FooterMain>
        <Footer onPress={() => navigation.navigate('Tickets', { tickets })}>
          <Entypo name="ticket" size={18} color={theme.colors.green100} />
          <FooterText>{t('HomeScreen.Meus Ingressos')}</FooterText>
        </Footer>
        <FooterContactor>
          <ContactorBox>
            <Counter>{totalTickets}</Counter>
          </ContactorBox>
        </FooterContactor>
      </FooterMain>
    </Container>
  );
}
