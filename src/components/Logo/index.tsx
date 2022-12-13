import React from 'react';

import { Header, IconHeader, TitleParty, TitleYour } from './styles';

export function Logo() {
  return (
    <Header>
      <IconHeader source={require('../../assets/party.png')} />
      <TitleParty>Find</TitleParty>
      <TitleYour>Your</TitleYour>
      <TitleParty>Party</TitleParty>
    </Header>
  );
}
