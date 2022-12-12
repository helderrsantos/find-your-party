import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

import { api } from '../../api';
import { Bag } from '../../components/Bag';
import { CardButton } from '../../components/CardButton';
import {
  Card,
  Container,
  Event,
  EventName,
  Date,
  DateTime,
  Box,
  EventTitle,
  Header,
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

export function Details({ navigation }) {
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

  const uri =
    'https://www.bcnoticias.com.br/wp-content/uploads/2021/10/shed.jpg';

  return (
    <Container>
      <Header>
        <Box onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={24} color="white" />
        </Box>
        <EventTitle>{'Evento'}</EventTitle>
        <Bag onPress={() => navigation.navigate('Cart')} />
      </Header>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <ImageParty>
              <CardThumbnail source={{ uri }} />
            </ImageParty>
            <Card>
              <Event>{item.eventLocal}</Event>
              <EventName>{item.eventAttraction}</EventName>
              <BoxCard>
                <DateTime>
                  <Ionicons name="time-outline" size={18} color="#7C7C8A" />
                  <Date>{item.dateTime}</Date>
                </DateTime>
              </BoxCard>
              <Detail>Detalhes</Detail>
              <Description>{item.description}</Description>
              <Detail>Dados do titular</Detail>
              <Input
                placeholder="Nome Completo"
                placeholderTextColor="#7C7C8A"
                maxLength={40}
              />
              <Input
                placeholder="Email"
                placeholderTextColor="#7C7C8A"
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
                <Values>R$ {item.ticket_price},00</Values>
              </BoxValues>
              <CardButton
                title="Comprar ingresso"
                onPress={() => navigation.navigate('Cart')}
              />
            </Card>
          </>
        )}
        ListEmptyComponent={<Event>Carregando...</Event>}
      />
    </Container>
  );
}
