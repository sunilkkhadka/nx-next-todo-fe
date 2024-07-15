import { signIn } from '../auth';

export function Login1() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', {
          redirectTo: '/'
        });
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
