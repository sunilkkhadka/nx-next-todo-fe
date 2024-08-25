import { BackBtn } from '@skeleton/shared';
import { Result } from 'antd';
import { AppMainLayout } from '../../../layouts';
export default function NotFound() {
  return (
    <AppMainLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<BackBtn type="primary" />}
      />
    </AppMainLayout>
  );
}
