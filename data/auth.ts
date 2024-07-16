/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth as fAuth } from '@skeleton/shared';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

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
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => error);
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
    })
  ],
  pages: {
    signIn: '/login'
  },

  callbacks: {
    authorized: async (authorization: any) => {
      const {
        auth,
        request: { nextUrl }
      } = authorization as any;
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname === '/';
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    }
  }
};

export const { signIn, signOut, auth, handlers } = NextAuth(config);
