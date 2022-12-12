import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const Box = styled.TouchableOpacity`
  width: 20px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 16px 10px 16px;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 140px;
`;

export const EventTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text600};
`;

export const Card = styled.View`
  height: 202px;
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  padding: 24px;
  margin: 24px 20px 0px;
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

export const DateTime = styled.Text`
  width: 100%;
  height: 24px;
`;
export const BoxCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px 18px 0px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const IconMoney = styled.Image``;

export const Cash = styled.Text`
  width: 80px;
  height: 24px;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;
