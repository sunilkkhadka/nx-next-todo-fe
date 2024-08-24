import { useTranslations } from 'next-intl';
export const SignOutBtn = () => {
  const t = useTranslations('Index');
  return (
    <form
      action={async () => {
        // 'use server';
        // await signOut({
        //   redirectTo: '/login'
        // });
      }}
    >
      <button type="submit">{t('logout')}</button>
    </form>
  );
};
