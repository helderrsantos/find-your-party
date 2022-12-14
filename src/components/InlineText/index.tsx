import React from 'react';

import { Container, CustomText } from './styles';

interface IInlineTextProps {
  icon: React.ReactElement;
  children: string;
}

export function InlineText({ icon, children }: IInlineTextProps) {
  return (
    <Container>
      {icon}
      <CustomText>{children}</CustomText>
    </Container>
  );
}
