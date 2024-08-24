export * from './themes';
const DASHBOARD_ITEMS = [
  { title: 'default', path: '/' },
  { title: 'projects', path: '/' },
  { title: 'ecommerce', path: '/' },
  { title: 'marketing', path: '/' },
  { title: 'social', path: '/' },
  { title: 'bidding', path: '/' },
  { title: 'learning', path: '/' },
  { title: 'logistics', path: '/' }
];

const CORPORATE_ITEMS = [
  { title: 'about', path: '/' },
  { title: 'team', path: '/' },
  { title: 'faq', path: '/' },
  { title: 'contact us', path: '/' },
  { title: 'pricing', path: '/' },
  { title: 'license', path: '/' }
];

const USER_PROFILE_ITEMS = [
  { title: 'details', path: '/' },
  { title: 'preferences', path: '/' },
  { title: 'information', path: '/' },
  { title: 'security', path: '/' },
  { title: 'activity', path: '/' },
  { title: 'actions', path: '/' },
  { title: 'help', path: '/' },
  { title: 'feedback', path: '/' }
];

const AUTHENTICATION_ITEMS = [
  { title: 'sign in', path: '/' },
  { title: 'sign up', path: '/' },
  { title: 'welcome', path: '/' },
  { title: 'verify email', path: '/' },
  { title: 'password reset', path: '/' },
  { title: 'account deleted', path: '/' }
];

const ERROR_ITEMS = [
  { title: '400', path: '/' },
  { title: '403', path: '/' },
  { title: '404', path: '/' },
  { title: '500', path: '/' },
  { title: '503', path: '/' }
];

export {
  AUTHENTICATION_ITEMS,
  CORPORATE_ITEMS,
  DASHBOARD_ITEMS,
  ERROR_ITEMS,
  USER_PROFILE_ITEMS
};
