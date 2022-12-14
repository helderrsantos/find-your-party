import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { ITicketCart } from '../../redux/reducers/cart';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const EventsList = styled(
  FlatList as new (props: FlatListProps<ITicketCart>) => FlatList<ITicketCart>,
).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const BoxCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  margin-bottom: 18px;
`;

export const Values = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.green100};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const ValuesText = styled.Text``;

export const Detail = styled.Text`
  margin-bottom: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const BoxValues = styled.View`
  margin: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
export const BoxButton = styled.View`
  margin: 0px 16px;
`;
