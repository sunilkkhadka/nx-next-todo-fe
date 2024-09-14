'use client'; // Error boundaries must be Client Components

import { BackBtn, RefreshBtn } from '@skeleton/shared';
import { Result } from 'antd';
import { useEffect } from 'react';

export default function Error({
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);
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
