import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const EventsList = styled(
  FlatList as new (
    props: FlatListProps<{
      ticket_price: number;
      dateTime: string;
      eventAttraction: string;
      id: string;
      eventLocal: string;
    }>,
  ) => FlatList<{
    id: string;
    eventLocal: string;
  }>,
).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const DateTime = styled.View`
  flex-direction: row;
  padding-top: 8px;
`;

export const User = styled.View`
  padding-top: 8px;
  flex-direction: row;
`;

export const BoxCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  margin-bottom: 18px;
`;

export const Date = styled.Text`
  font-size: 12px;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const Cash = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  padding-left: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const Values = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.green100};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const ValuesText = styled.Text``;

export const TicketValue = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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
