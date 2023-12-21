//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: true
  },
  nx: {
    svgr: false
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextIntl
];

module.exports = composePlugins(...plugins)(nextConfig);
