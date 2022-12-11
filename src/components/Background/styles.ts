import styled from 'styled-components/native';

export const HeaderMain = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.purple};
  height: 32px;
  width: 32px;
`;

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
  color: ${({ theme }) => theme.colors.green200};
`;
export const TitleYour = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const HeaderBag = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const Bag = styled.Image``;
