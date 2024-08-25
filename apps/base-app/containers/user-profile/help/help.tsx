'use client';
import {
  DollarOutlined,
  PullRequestOutlined,
  RocketOutlined,
  SettingOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Card } from '@skeleton/shared';
import { Button, Flex, Input, Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { createElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserProfileLayout } from '../user-profile-layout';
const { Text, Title } = Typography;

const TOPICS = [
  {
    title: 'get started',
    image: RocketOutlined
  },
  {
    title: 'features',
    image: UnorderedListOutlined
  },
  {
    title: 'billing',
    image: DollarOutlined
  },
  {
    title: 'troubleshooting',
    image: SettingOutlined
  },
  {
    title: 'integrations',
    image: PullRequestOutlined
  }
];

const OTHER_TOPICS = [
  {
    title: 'Getting started guide',
    description:
      "Not sure where to start? Get going with our easy-to-follow beginner's guide to Antd Dashboard.",
    action: 'Get started'
  },
  {
    title: "What's new",
    description:
      'All the upgrades and improvements that‘ll better help you organize it all.',
    action: "See what's new"
  },
  {
    title: 'Known issues',
    description:
      'The bugs with fixes in the works. Check here before shooting us a message.',
    action: 'Consult the list'
  }
];

const TITLE_PROPS: TitleProps = {
  style: {
    marginBottom: 0,
    textAlign: 'center'
  },
  level: 3
};

export const UserHelpContainer = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('Account');
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <UserProfileLayout>
      <Flex vertical gap="large">
        <Flex vertical gap="middle">
          <Title {...TITLE_PROPS}>How can we help?</Title>
          <Input.Search placeholder="search articles..." />
        </Flex>
        <Flex gap="middle" wrap={isMobile ? 'wrap' : 'nowrap'}>
          {TOPICS.map((t) => (
            <Card
              key={t?.title}
              hoverable
              style={{
                width: isMobile ? '100%' : '25%',
                textAlign: 'center'
              }}
            >
              <Flex vertical gap="middle">
                {createElement(t.image, {
                  style: { fontSize: '1.5rem', margin: 'auto' }
                })}
                <Text style={{ textTransform: 'capitalize' }}>{t.title}</Text>
              </Flex>
            </Card>
          ))}
        </Flex>
        <Flex gap="middle" wrap={isMobile ? 'wrap' : 'nowrap'}>
          {OTHER_TOPICS.map((t) => (
            <Card
              key={t.title}
              title={t.title}
              actions={[<Button key="action">{t.action}</Button>]}
            >
              <Text>{t.description}</Text>
            </Card>
          ))}
        </Flex>
        <Title {...TITLE_PROPS}>Frequently asked questions</Title>
        <Text>
          Our website has a list of questions and answers that aim to provide
          clarity on a particular subject. If you need assistance, feel free to
          check out our FAQs.
        </Text>
        <Card
          tabList={[
            {
              key: 'Account',
              tab: 'Account'
            },
            {
              key: 'Security',
              tab: 'Security'
            }
          ]}
          activeTabKey={activeTabKey}
          tabBarExtraContent={<Button type="link">Go to FAQs</Button>}
          onTabChange={onTabChange}
          tabProps={{
            size: 'middle'
          }}
        >
          test
        </Card>
      </Flex>
    </UserProfileLayout>
  );
};
