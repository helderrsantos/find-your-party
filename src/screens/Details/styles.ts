import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray200};
  flex: 1;
`;

export const Box = styled.Pressable`
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
`;

export const EventTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text600};
`;
export const CardThumbnail = styled.ImageBackground`
  background-color: ${({ theme }) => theme.colors.white100};
  height: 199px;
  width: 100%;
`;
export const ImageParty = styled.View``;

export const Card = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  margin: 0px 24px 24px 24px;
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
  margin: 8px 0px 24px 0px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const Detail = styled.Text`
  width: 100%;
  height: 29px;
  margin-bottom: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.colors.white100};
  background-color: ${({ theme }) => theme.colors.gray400};
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 16px;
  width: 100%;
  height: 54px;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Contactor = styled.View`
  width: 199px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green300};
  width: 52px;
  height: 52px;
  border-radius: 6px;
`;

export const Counter = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Amount = styled.View`
  width: 100%;
  height: 52px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const Values = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.green100};
  font-family: ${({ theme }) => theme.fonts.text400};
`;

export const ValuesText = styled.Text``;

export const BoxValues = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
`;
