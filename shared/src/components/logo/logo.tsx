import { Flex, FlexProps } from 'antd';
import { CSSProperties } from 'react';

import Link from 'next/link';
import styles from './logo.module.css';

type LogoProps = {
  color?: CSSProperties['color'];
  imgSize?: {
    h?: number | string;
    w?: number | string;
  };
  asLink?: boolean;
  href?: string;
  bgColor?: CSSProperties['backgroundColor'];
  logSrc?: string;
} & Partial<FlexProps>;

export const Logo = ({
  asLink,
  href,
  imgSize,
  logSrc,
  ...others
}: LogoProps) => {
  return asLink ? (
    <Link href={href || '#'} className={styles?.logo_link}>
      <Flex gap={others.gap || 'small'} align="center" {...others}>
        <img src={logSrc} alt="rtw" height={imgSize?.h || 20} />
      </Flex>
    </Link>
  ) : (
    <Flex
      gap={others.gap || 'small'}
      align="center"
      {...others}
      style={{
        padding: '1.3rem'
      }}
    >
      <img src={logSrc} alt="rtw" height={imgSize?.h || 20} />
    </Flex>
  );
};
