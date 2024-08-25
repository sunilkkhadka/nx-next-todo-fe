'use client'; // Error boundaries must be Client Components

import { BackBtn, RefreshBtn } from '@skeleton/shared';
import { Result } from 'antd';

export default function ErrorPage() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={[
        <BackBtn key="back-btn" type="primary" />,
        <RefreshBtn key="refresh-btn" />
      ]}
    />
  );
}
