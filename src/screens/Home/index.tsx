import React from 'react';

import { Background } from '../../components/Background';
import { EventButton } from '../../components/EventButton';
import { Title } from '../../components/Title';
import {
  ContactorBox,
  Container,
  Counter,
  EventBox,
  Footer,
  FooterContactor,
  FooterMain,
  FooterText,
  Header,
  Ticket,
} from './styles';

export function Home({ navigation }) {
  return (
    <Container>
      <Header>
        <Title />
        <Background onPress={() => navigation.navigate('Cart')} />
      </Header>
      <EventBox>
        <EventButton
          onPress={() => navigation.navigate('Events')}
          title={'Balada'}
        />
        <EventButton
          onPress={() => navigation.navigate('Events')}
          title={'Shows Nacionais'}
        />
        <EventButton
          onPress={() => navigation.navigate('Events')}
          title={'Teatro'}
        />
        <EventButton
          onPress={() => navigation.navigate('Events')}
          title={'Universidade'}
        />
      </EventBox>

      <FooterMain>
        <Footer onPress={() => navigation.navigate('Tickets')}>
          <Ticket source={require('../../assets/ticket.png')} />
          <FooterText>Meus Ingressos</FooterText>
        </Footer>
        <FooterContactor>
          <ContactorBox>
            <Counter>{'0'}</Counter>
          </ContactorBox>
        </FooterContactor>
      </FooterMain>
    </Container>
  );
}
