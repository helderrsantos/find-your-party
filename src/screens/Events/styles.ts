import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const EventsList = styled(
  FlatList as new (
    props: FlatListProps<{ id: string; eventLocal: string }>,
  ) => FlatList<{
    id: string;
    eventLocal: string;
  }>,
).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const EventTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text600};
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Event = styled.Text`
  font-size: 20px;
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text600};
`;

export const EventName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const DateTime = styled.View`
  flex-direction: row;
`;
export const BoxCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`;

export const Date = styled.Text`
  font-size: 12px;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const IconMoney = styled.Image``;

export const Cash = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  padding-left: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;
