'use client';
import { MailFilled, PhoneFilled } from '@ant-design/icons';
import { Card } from '@skeleton/shared';
import { Col, Row, RowProps, Space, Typography } from 'antd';
import { CorporateLayouts } from '../../../layouts/corporate';
import { ContactForm } from '../../contact-form/contact-form';
const { Link, Text, Paragraph } = Typography;

const ROW_PROPS: RowProps = {
  gutter: [
    { xs: 8, sm: 16, md: 24, lg: 32 },
    { xs: 8, sm: 16, md: 24, lg: 32 }
  ]
};

const textStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between'
};

const cardStyles: React.CSSProperties = {
  height: '100%'
};
export const ContactContainer = () => {
  return (
    <CorporateLayouts>
      <Row {...ROW_PROPS}>
        <Col sm={24} lg={12}>
          <Card title="Phone" extra={<PhoneFilled />} style={cardStyles}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text style={textStyles}>
                Nairobi: <Link strong>(254) 000-0000</Link>
              </Text>
              <Text style={textStyles}>
                Kampala: <Link strong>(255) 000-0000</Link>
              </Text>
              <Text style={textStyles}>
                Dodoma: <Link strong>(256) 000-0000</Link>
              </Text>
            </Space>
            <Paragraph style={{ textAlign: 'center', margin: '1rem 0 0 0' }}>
              We are available during weekdays and office hours (8AM-5PM), feel
              free to leave us a call.
            </Paragraph>
          </Card>
        </Col>
        <Col sm={24} lg={12}>
          <Card title="Email" extra={<MailFilled />} style={cardStyles}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text style={textStyles}>
                Sales: <Link strong>biz@sparx.com</Link>
              </Text>
              <Text style={textStyles}>
                Support: <Link strong>help@sparx.com</Link>
              </Text>
            </Space>
            <Paragraph style={{ textAlign: 'center', margin: '1rem 0 0 0' }}>
              We are available everyday, feel free to write to us.
            </Paragraph>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Contact form">
            <ContactForm />
          </Card>
        </Col>
      </Row>
    </CorporateLayouts>
  );
};
