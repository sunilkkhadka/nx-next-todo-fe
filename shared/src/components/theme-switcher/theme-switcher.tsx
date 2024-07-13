'use client';
import { Button as AntdButton, ButtonProps } from 'antd';
import { globalThemeStore } from '../../utils/store-config';
/* eslint-disable-next-line */
export interface Props extends ButtonProps {
  children: React.ReactNode;
}

const ThemeSwitcher = ({ children, ...props }: ButtonProps) => {
  const { setColorScheme, colorScheme } = globalThemeStore((state) => state);
  return (
    <AntdButton
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      {children}
    </AntdButton>
  );
};
ThemeSwitcher.DisplayName = 'ThemeSwitcher';
export { ThemeSwitcher };
