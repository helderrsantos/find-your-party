import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 16px;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 140px;
  width: 100%;
`;

export const EventBox = styled.ScrollView``;

export const FooterMain = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray100};
  height: 78px;
  width: 100%;
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const Ticket = styled.Image`
  margin-right: 16px;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.colors.green100};
  font-size: 14px;
`;

export const FooterContactor = styled.View`
  margin-right: 24px;
`;

export const ContactorBox = styled.View`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 6px;
`;

export const Counter = styled.Text`
  font-size: 14px;
  color: white;
`;
