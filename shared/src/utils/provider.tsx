'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { AntRegistry } from './AntdRegistry';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <AntRegistry>{children}</AntRegistry>
    </StyleSheetManager>
  );
};
export { Provider };
