import { Platform } from 'react-native';

export const formatCurrencyBRL = (value: number) => {
  const parsedPrice = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return Platform.OS === 'android' ? `R$ ${value.toFixed(2)}` : parsedPrice;
};
