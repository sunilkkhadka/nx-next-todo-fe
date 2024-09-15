import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { auth } from '../auth';

export default async function SessionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    };
  }
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
}
