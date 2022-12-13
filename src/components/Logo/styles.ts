import styled from 'styled-components/native';

export const Header = styled.View`
  width: 170px;
  background-color: ${({ theme }) => theme.colors.gray200};
  flex-direction: row;
  align-items: center;
`;

export const IconHeader = styled.Image`
  margin-right: 8px;
`;

export const TitleParty = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.green200};
`;
export const TitleYour = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.purple};
`;
