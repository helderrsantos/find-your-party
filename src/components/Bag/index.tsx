import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { useAppSelector } from '../../hooks/useAppSelector';
import { BigBag, ContactorBox, Counter, HeaderBag, HeaderMain } from './styles';

type Props = TouchableOpacityProps & {
  onPress: () => void;
};

export function Bag({ ...rest }: Props) {
  const tickets = useAppSelector(state => state.cart.tickets);
  return (
    <HeaderMain>
      <ContactorBox>
        <Counter>{tickets?.length}</Counter>
      </ContactorBox>
      <HeaderBag {...rest}>
        <BigBag source={require('../../assets/bag.png')} />
      </HeaderBag>
    </HeaderMain>
  );
}
