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
`;

export const Cash = styled.View`
  flex-direction: row;
`;
