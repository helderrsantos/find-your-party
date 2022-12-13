import React from 'react';

import { Entypo } from '@expo/vector-icons';

import { EventButton } from '../../components/EventButton';
import { HeaderMain } from '../../components/Header';
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
  const handleNavigation = category => {
    return navigation.navigate('Events', { category });
  };
  return (
    <Container>
      <HeaderMain onPressBag={() => navigation.navigate('Cart')} />
      <EventBox>
        <EventButton
          onPress={() => handleNavigation('clubbing')}
          title={'Balada'}
        />
        <EventButton
          onPress={() => handleNavigation('shows')}
          title={'Shows Nacionais'}
        />
        <EventButton
          onPress={() => handleNavigation('theater')}
          title={'Teatro'}
        />
        <EventButton
          onPress={() => handleNavigation('university')}
          title={'Universidade'}
        />
      </EventBox>

      <FooterMain>
        <Footer onPress={() => navigation.navigate('Tickets')}>
          <Entypo name="ticket" size={18} color="green" />
          <FooterText>Meus Ingressos</FooterText>
        </Footer>
        <FooterContactor>
          <ContactorBox>
            <Counter>{'1'}</Counter>
          </ContactorBox>
        </FooterContactor>
      </FooterMain>
    </Container>
  );
}
