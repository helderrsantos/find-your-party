import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Bag, HeaderBag, HeaderMain } from './styles';

type Props = TouchableOpacityProps & {
  onPress: () => void;
};

export function Background({ ...rest }: Props) {
  return (
    <HeaderMain>
      <HeaderBag {...rest}>
        <Bag source={require('../../assets/bag.png')} />
      </HeaderBag>
    </HeaderMain>
  );
}
