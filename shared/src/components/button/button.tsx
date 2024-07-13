'use client';
import { Button as AntdButton, ButtonProps } from 'antd';
/* eslint-disable-next-line */
export interface Props extends ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntdButton {...props}>{children}</AntdButton>;
};
Button.DisplayName = 'Button';
export { Button };
