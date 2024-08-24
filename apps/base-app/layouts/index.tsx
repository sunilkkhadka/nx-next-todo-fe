'use client';
import { Layout, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { StylesContext } from '../context/styles';
import FooterNav from './footer';
import { HeaderNav } from './header';
import { Sidebar } from './sidebar';
const { Content } = Layout;

const AppMainLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { borderRadius }
  } = theme.useToken();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <StylesContext.Provider
      value={{
        rowProps: {
          gutter: [
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 }
          ]
        },
        carouselProps: {
          autoplay: true,
          dots: true,
          dotPosition: 'bottom',
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: 'none',
            border: 'none',
            transition: 'all .2s'
          }}
        />
        <Layout>
          <HeaderNav
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMobile={isMobile}
          />
          <Content
            style={{
              margin: `0 0 0 ${collapsed ? 0 : '200px'}`,
              background: '#ebedf0',
              borderRadius: collapsed ? 0 : borderRadius,
              transition: 'all .25s',
              padding: '24px 32px',
              minHeight: 360
            }}
          >
            {children}
          </Content>
          <FooterNav collapsed={collapsed} />
        </Layout>
      </Layout>
    </StylesContext.Provider>
  );
};

export { AppMainLayout };
