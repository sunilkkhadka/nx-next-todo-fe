import { useTranslations } from 'next-intl';
import { SignOutBtn } from '../components';

export const HomeContainer = ({ session }: { session: any }) => {
  const t = useTranslations('Index');
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>
        {t('Hello')}, {session?.user?.name || session?.user?.email}
      </h1>
      <p>{t("You're logged in")}</p>
      <SignOutBtn />
    </div>
  );
};
