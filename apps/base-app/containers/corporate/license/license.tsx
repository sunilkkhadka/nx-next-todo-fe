'use client';
import { Card } from '@skeleton/shared';
import { Card as AntCard, Col, Row, Typography } from 'antd';
import { useStylesContext } from '../../../context/styles';
import { CorporateLayouts } from '../../../layouts/corporate';
const LICENSE_DATA = [
  {
    title: 'free',
    description:
      'The Free Plan grants the user a non-exclusive, non-transferable license to use the dashboard template for personal or non-commercial purposes. Users are allowed to modify the template to suit their needs. However, this license does not permit the user to sublicense, sell, or distribute the template or any derivative works. The Free Plan also includes basic support via email. The license is valid as long as the user adheres to the terms of service.'
  },
  {
    title: 'pro',
    description:
      'The Pro Plan includes a non-exclusive, non-transferable license that allows the user to use the dashboard template for commercial purposes. Users can modify, customize, and create derivative works based on the template. The license permits the user to sublicense the template to clients or end-users. It also includes priority email support and grants access to premium features such as data export/import and the premium templates library. The license is valid for the subscribed period (monthly or annually) and automatically renews unless canceled.'
  },
  {
    title: 'enterprise',
    description:
      'The Enterprise Plan provides a comprehensive, non-exclusive, non-transferable license for large-scale commercial use. This license grants the user unlimited flexibility to modify, customize, and create derivative works from the dashboard template. Users can sublicense the template, access premium support with a dedicated account manager, and utilize advanced features like API access and integration support. The license includes 24/7 priority support and ensures the highest level of data security and compliance. The license is valid for the subscribed period (monthly or annually) and automatically renews unless canceled.'
  }
];
export const LicenseContainer = () => {
  const stylesContext = useStylesContext();
  return (
    <CorporateLayouts>
      <Row {...stylesContext?.rowProps}>
        <Col span={24}>
          <Card title="licence comparisons">
            {LICENSE_DATA.map((l: any) => (
              <AntCard
                key={l?.title}
                title={`${l.title} plan license`}
                bordered={true}
                style={{ marginBottom: '1rem' }}
              >
                <Typography.Text>{l.description}</Typography.Text>
              </AntCard>
            ))}
          </Card>
        </Col>
        <Col span={24}>
          <Card title="general terms and conditions">
            <ul>
              <li>
                All licenses are subject to adherence to the terms of service
                and acceptable use policies outlined by the provider.
              </li>
              <li>
                Users must not remove or alter any copyright notices or branding
                present in the template.
              </li>
              <li>
                Users are responsible for the content and data they upload or
                display using the dashboard template.
              </li>
              <li>
                The provider reserves the right to terminate the license in case
                of violation of terms or misuse of the template.
              </li>
              <li>
                Refunds are subject to the refund policy of the provider and are
                applicable within the specified period after the purchase.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </CorporateLayouts>
  );
};
