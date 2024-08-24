import { Alert, Button, CardProps, List } from 'antd';

import { Notifications } from '../../types';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';
import { NotificationsItem } from './notifications-item';

type Props = {
  data?: Notifications[];
  loading?: boolean;
  error?: any;
} & CardProps;

export const NotificationsCard = ({
  data,
  loading,
  error,
  ...others
}: Props) => {
  return (
    <Card
      title="Notifications"
      extra={<Button>View all</Button>}
      bodyStyle={{
        padding: '0 0 1rem 0'
      }}
      {...others}
    >
      {error ? (
        <Alert
          message="Error"
          description={error.toString()}
          type="error"
          showIcon
        />
      ) : loading ? (
        <Loader />
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              return page;
            },
            pageSize: 5,
            align: 'center'
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.notification_id}>
              <NotificationsItem data={item} />
            </List.Item>
          )}
        />
      )}
    </Card>
  );
};
