import styled from 'styled-components/native';

export const HeaderMain = styled.View`
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 32px;
  width: 32px;
`;

export const Header = styled.View`
  width: 170px;
  background-color: ${({ theme }) => theme.colors.gray200};
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
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const BigBag = styled.Image``;

export const ContactorBox = styled.View`
  width: 16px;
  height: 16px;
  margin-left: 18px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green300};
  border-radius: 6px;
  position: absolute;
  z-index: 1;
`;

export const Counter = styled.Text`
  font-size: 8px;
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.text600};
`;
