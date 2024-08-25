'use client';
import { Card } from '@skeleton/shared';
import {
  Col,
  ConfigProvider,
  Descriptions,
  DescriptionsProps,
  Image,
  Row,
  Tabs,
  TabsProps,
  theme
} from 'antd';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { USER_PROFILE_ITEMS } from '../../constants';
import { useStylesContext } from '../../context/styles';
import './style.css';
const DESCRIPTION_ITEMS: DescriptionsProps['items'] = [
  {
    key: 'full-name',
    label: 'Name',
    children: <span>Kelvin Kiptum Kiprop</span>
  },
  {
    key: 'job-title',
    label: 'Job title',
    children: <span>Software Engineer</span>
  },
  {
    key: 'email',
    label: 'Email',
    children: (
      <Link href="mailto:kelvin.kiprop96@gmail.com">
        kelvin.kiprop96@gmail.com
      </Link>
    )
  },
  {
    key: 'telephone',
    label: 'Phone',
    children: <Link href="tel:+254706094433">+254 706 094 4433</Link>
  },
  {
    key: 'github',
    label: 'Github',
    children: (
      <Link href="https://github.com/kelvink96" target="_blank">
        kelvink96
      </Link>
    )
  },
  {
    key: 'twitter',
    label: 'Twitter',
    children: (
      <Link href="https://twitter.com/kelvink_96" target="_blank">
        @kelvink_96
      </Link>
    )
  }
];

const TAB_ITEMS: TabsProps['items'] = USER_PROFILE_ITEMS.map((u) => ({
  key: u.title,
  label: u.title
}));
export const UserProfileLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {
    token: { borderRadius }
  } = theme.useToken();
  const stylesContext = useStylesContext();
  const pathaname = usePathname();
  const router = useRouter();
  const [activeKey, setActiveKey] = useState(TAB_ITEMS[0]?.key);

  const onChange = (key: string) => {
    router.push(key);
  };
  useEffect(() => {
    const k =
      TAB_ITEMS.find((d) => location.pathname.includes(d.key))?.key || '';
    setActiveKey(k);
  }, [pathaname]);

  return (
    <>
      <Card
        className="user-profile-card-nav card"
        actions={[
          <ConfigProvider
            key="config-provider"
            theme={{
              components: {
                Tabs: {
                  colorBorderSecondary: 'none'
                }
              }
            }}
          >
            <Tabs
              defaultActiveKey={activeKey}
              activeKey={activeKey}
              items={TAB_ITEMS}
              onChange={onChange}
              style={{ textTransform: 'capitalize' }}
            />
          </ConfigProvider>
        ]}
      >
        <Row {...stylesContext?.rowProps}>
          <Col xs={24} sm={8} lg={4}>
            <Image
              src="https://randomuser.me/api/portraits/thumb/men/10.jpg"
              alt="user profile image"
              height="100%"
              width="100%"
              style={{ borderRadius }}
            />
          </Col>
          <Col xs={24} sm={16} lg={20}>
            <Descriptions
              title="User Info"
              items={DESCRIPTION_ITEMS}
              column={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
            />
          </Col>
        </Row>
      </Card>
      <div style={{ marginTop: '1.5rem' }}>{children}</div>
    </>
  );
};
