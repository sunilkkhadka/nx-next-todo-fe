import { auth } from '../auth';
import { HomeContainer } from '../containers';

export default async function Index() {
  const session = await auth();
  return (
    <>
      <HomeContainer />
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </>
  );
}
