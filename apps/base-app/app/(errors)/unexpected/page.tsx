'use client'; // Error boundaries must be Client Components

import { BackBtn, RefreshBtn } from '@skeleton/shared';
import { Result } from 'antd';
import { AppMainLayout } from '../../../layouts';

export default function ErrorPage() {
  return (
    <AppMainLayout>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={[
          <BackBtn key="back-btn" type="primary" />,
          <RefreshBtn key="refresh-btn" />
        ]}
      />
    </AppMainLayout>
  );
}
