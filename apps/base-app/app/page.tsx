import { auth } from '../auth';

import { HomeContainer } from '../containers';
export default async function Index() {
  const session = await auth();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return <HomeContainer session={session} />;
}
