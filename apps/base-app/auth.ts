/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth as fAuth } from '@skeleton/shared';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Line from 'next-auth/providers/line';
export const config = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          fAuth,
          (credentials as any)?.email || '',
          (credentials as any)?.password || ''
        )
          .then(async (userCredential) => {
            if (userCredential?.user) {
              return {
                email: userCredential?.user.email,
                accessToken: await userCredential?.user.getIdToken(),
                refreshToken: userCredential.user?.refreshToken,
                displayName: userCredential?.user.displayName,
                picture: userCredential?.user.photoURL,
                emailVerified: userCredential?.user.emailVerified,
                phoneNumber: userCredential?.user.phoneNumber
              };
            }
            return null;
          })
          .catch(() => {
            // throw new Error('Invalid email or password');
          });
      }
    }),
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    Line({
      clientId: process.env.AUTH_LINE_ID,
      clientSecret: process.env.AUTH_LINE_SECRET,
      checks: ['state']
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login'
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.displayName = user.displayName;
        token.picture = user.picture;
        token.emailVerified = user.emailVerified;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.displayName = token.displayName;
      session.user.picture = token.picture;
      session.user.emailVerified = token.emailVerified;
      session.user.emailVerified = token.emailVerified;

      return session;
    }
    // async signIn({ user, account }) {
    //   // console.log('data', { user, account });
    //   // if (account?.provider === 'google') {
    //   //   const dbUser = await fetch(
    //   //     `${process.env.BACKEND_URL}/auth/google/token?token=${account?.id_token}`,
    //   //     {
    //   //       method: 'GET',
    //   //       headers: {
    //   //         'Content-Type': 'application/json'
    //   //       }
    //   //     }
    //   //   ).then((r) => r.json());

    //   //   if (!dbUser?.data?.user) return false;

    //   //   user.id = dbUser?.data?.user?.id;
    //   //   user.email = dbUser?.data?.user?.email;
    //   //   user.firstName = dbUser?.data?.user?.firstName;
    //   //   user.lastName = dbUser?.data?.user?.lastName;
    //   //   user.avatar = dbUser?.data?.user?.avatar;
    //   //   user.isEmailVerified = dbUser?.data?.user?.isEmailVerified;
    //   //   user.isPhoneVerified = dbUser?.data?.user?.isPhoneVerified;
    //   //   user.token = dbUser?.data?.accessToken;

    //   //   return true;
    //   // }
    //   return true;
    // }
    // authorized: async (authorization: any) => {
    //   const {
    //     auth,
    //     request: { nextUrl }
    //   } = authorization as any;
    //   const isLoggedIn = auth?.user?.id;
    //   const isOnDashboard = nextUrl.pathname !== '/login';
    //   if (isOnDashboard) {
    //     if (isLoggedIn) return true;
    //     return false;
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL('/', nextUrl));
    //   }
    //   return true;
    // }
  }
};

export const { signIn, signOut, auth, handlers } = NextAuth(config);
