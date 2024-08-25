import { AntdRegistry } from '@ant-design/nextjs-registry';
import { StyledComponentsRegistry, themeConfig } from '@skeleton/shared';
import { ConfigProvider } from 'antd';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Skeleton</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <ConfigProvider
                theme={{
                  ...themeConfig
                }}
              >
                {children}
              </ConfigProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
