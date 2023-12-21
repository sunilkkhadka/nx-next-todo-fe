'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider, Layout } from 'antd';
import { ThemeProvider } from 'antd-style';
import { Button } from '../components/button/button';
import { globalThemeStore } from './store-config';
import { GlobalStyle } from './global.style';

const AntRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isServerInserted = React.useRef<boolean>(false);
  const { colorScheme } = globalThemeStore((state) => state);
  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });
  return (
    <StyleProvider cache={cache}>
      <ThemeProvider themeMode={colorScheme || 'light'}>
        <ConfigProvider>
          <GlobalStyle />
          <Layout>{children}</Layout>
        </ConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  );
};

export { AntRegistry };
