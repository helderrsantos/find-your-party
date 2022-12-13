import styled from 'styled-components/native';

export const Container = styled.View`
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
