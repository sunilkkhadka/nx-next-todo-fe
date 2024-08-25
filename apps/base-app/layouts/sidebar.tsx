/* eslint-disable no-unused-vars */
'use client';
import {
  BugOutlined,
  IdcardOutlined,
  PieChartOutlined,
  SecurityScanOutlined,
  UserOutlined
} from '@ant-design/icons';
import { COLOR, Logo } from '@skeleton/shared';
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const { Sider } = Layout;
type SideNavProps = SiderProps;
type MenuItem = Required<MenuProps>['items'][number];
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
};
export const items: MenuProps['items'] = [
  getItem('Dashboards', 'dashboards', <PieChartOutlined />, [
    getItem(<Link href={'/'}>Default</Link>, 'default', null),
    getItem(<Link href={'/'}>Projects</Link>, 'projects', null),
    getItem(<Link href={'/'}>eCommerce</Link>, 'ecommerce', null),
    getItem(<Link href={'/'}>Marketing</Link>, 'marketing', null),
    getItem(<Link href={'/'}>Social</Link>, 'social', null),
    getItem(<Link href={'/'}>Bidding</Link>, 'bidding', null),
    getItem(<Link href={'/'}>Learning</Link>, 'learning', null),
    getItem(<Link href={'/'}>Logistics</Link>, 'logistics', null)
  ]),

  getItem('Pages', 'pages', null, [], 'group'),
  getItem('Corporate', 'corporate', <IdcardOutlined />, [
    getItem(<Link href={'/'}>About</Link>, 'about', null),
    getItem(<Link href={'/'}>Team</Link>, 'team', null),
    getItem(<Link href={'/'}>FAQ</Link>, 'faqs', null),
    getItem(<Link href={'/'}>Contact us</Link>, 'contact us', null),
    getItem(<Link href={'/'}>Pricing</Link>, 'pricing', null),
    getItem(<Link href={'/'}>License</Link>, 'license', null)
  ]),
  getItem('User profile', 'user-profile', <UserOutlined />, [
    getItem(
      <Link href={'/user-profile/details'}>Details</Link>,
      'details',
      null
    ),
    getItem(
      <Link href={'/user-profile/preferences'}>Preferences</Link>,
      'preferences',
      null
    ),
    getItem(
      <Link href={"/user-profile/information'"}>Information</Link>,
      'personal-information',
      null
    ),
    getItem(
      <Link href={"/user-profile/security'"}>Security</Link>,
      'security',
      null
    ),
    getItem(
      <Link href={"/user-profile/activity'"}>Activity</Link>,
      'activity',
      null
    ),
    getItem(
      <Link href={"/user-profile/actions'"}>Actions</Link>,
      'actions',
      null
    ),
    getItem(<Link href={"/user-profile/help'"}>Help</Link>, 'help', null)
  ]),

  getItem('Authentication', 'authentication', <SecurityScanOutlined />, [
    getItem(<Link href={'/'}>Sign In</Link>, 'auth-signin', null),
    getItem(<Link href={'/'}>Sign Up</Link>, 'auth-signup', null),
    getItem(<Link href={'/'}>Welcome</Link>, 'auth-welcome', null),
    getItem(<Link href={'/'}>Verify email</Link>, 'auth-verify', null),
    getItem(
      <Link href={'/'}>Password reset</Link>,
      'auth-password-reset',
      null
    ),
    getItem(
      <Link href={'/'}>Account deleted</Link>,
      'auth-account-deactivation',
      null
    )
  ]),
  getItem('Errors', 'errors', <BugOutlined />, [
    getItem(
      <Link href={'/unexpected'}>Unexpected errors</Link>,
      'unexpected errors',
      null
    ),
    getItem(<Link href={'/not-found'}>not found</Link>, 'Not found', null)
  ])
];
const rootSubmenuKeys = ['dashboards', 'corporate', 'user-profile'];
const Sidebar = ({
  collapsed,
  setCollapsed,
  ...props
}: SideNavProps & { setCollapsed: (collapsed: boolean) => void }) => {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState(['']);
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    return null;
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setOpenKeys(paths);
    setCurrent(paths[paths.length - 1]);
  }, [pathname]);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      {...props}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Logo logSrc="/logo.svg" color="#f00" />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'none',
              itemSelectedBg: COLOR['100'],
              itemHoverBg: COLOR['50'],
              itemSelectedColor: COLOR['600']
            }
          }
        }}
      >
        <Menu
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none' }}
        />
      </ConfigProvider>
    </Sider>
  );
};
export { Sidebar };
