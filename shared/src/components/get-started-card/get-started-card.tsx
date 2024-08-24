'use client';
import { RightOutlined } from '@ant-design/icons';
import { Button, CardProps, Flex, Image, Typography } from 'antd';
import CountUp from 'react-countup';
import { Card } from '../card/card';

type Props = CardProps;

export const GetStartedCard = ({
  imgUrl,
  ...others
}: Props & { imgUrl: string }) => {
  return (
    <Card {...others}>
      <Flex justify="space-between" align="center" gap="middle">
        <Flex vertical gap="large" align="flex-start">
          <Typography.Title level={4} style={{ margin: 0 }}>
            You have <CountUp end={2} /> projects to finish this week
          </Typography.Title>
          <Typography.Text>
            You have already completed 68% of your monthly target. Keep going to
            achieve your goal.
          </Typography.Text>
          <Button type="primary" size="middle">
            Get started <RightOutlined />
          </Button>
        </Flex>
        <Image
          src={imgUrl}
          height={180}
          preview={false}
          style={{ objectFit: 'cover' }}
        />
      </Flex>
    </Card>
  );
};
