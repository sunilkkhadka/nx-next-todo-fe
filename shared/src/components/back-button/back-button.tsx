'use client';
import { LeftOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Tooltip } from 'antd';
import Link from 'next/link';

type Props = {
  wIcon?: boolean;
  iconOnly?: boolean;
} & ButtonProps;

export const BackBtn = ({ wIcon, iconOnly, ...others }: Props) => {
  return (
    <Tooltip title="Navigate to previous page">
      <Link href="/">
        <Button
          type="link"
          icon={wIcon || iconOnly ? <LeftOutlined /> : null}
          {...others}
        >
          {!iconOnly && 'Go back'}
        </Button>
      </Link>
    </Tooltip>
  );
};
