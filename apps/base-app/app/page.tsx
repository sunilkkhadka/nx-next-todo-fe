import { DefaultDashboardContainer } from '../containers';
import { AppMainLayout } from '../layouts';
export default async function Index() {
  // const session = await auth();
  return (
    <AppMainLayout>
      <DefaultDashboardContainer />;
    </AppMainLayout>
  );
}
