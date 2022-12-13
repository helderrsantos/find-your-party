import styled from 'styled-components/native';

import { IButtonProps } from '.';

export const Container = styled.Pressable<Omit<IButtonProps, 'title'>>`
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === 'confirm' ? theme.colors.green300 : theme.colors.red};
  width: 100%;
  height: 46px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
`;
export const TitleButton = styled.Text<{ children: string }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.text600};
  color: ${({ theme }) => theme.colors.white100};
`;
