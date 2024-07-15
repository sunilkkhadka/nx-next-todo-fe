import { signOut } from '../auth';
export const SignOutBtn = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirectTo: '/login'
        });
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};
