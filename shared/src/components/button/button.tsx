'use client';
import { globalThemeStore } from '../../utils/store-config';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button``;

const Button = (props: ButtonProps) => {
  const { setColorScheme, colorScheme } = globalThemeStore((state) => state);
  const t = useTranslations('Index');
  return (
    <StyledButton
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      {t('change theme')}
    </StyledButton>
  );
};
Button.DisplayName = 'Button';
export { Button };
