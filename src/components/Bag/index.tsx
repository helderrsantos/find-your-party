import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { BigBag, ContactorBox, Counter, HeaderBag, HeaderMain } from './styles';

type Props = TouchableOpacityProps & {
  onPress: () => void;
};

export function Bag({ ...rest }: Props) {
  return (
    <HeaderMain>
      <ContactorBox>
        <Counter>{'1'}</Counter>
      </ContactorBox>
      <HeaderBag {...rest}>
        <BigBag source={require('../../assets/bag.png')} />
      </HeaderBag>
    </HeaderMain>
  );
}
