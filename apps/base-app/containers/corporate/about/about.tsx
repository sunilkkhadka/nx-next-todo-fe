'use client';
import { Card, Employee, EmployeeCard } from '@skeleton/shared';
import {
  Card as AntdCard,
  Col,
  Flex,
  Image,
  List,
  Row,
  Typography
} from 'antd';
import CountUp from 'react-countup';
import { useStylesContext } from '../../../context/styles';
import { CorporateLayouts } from '../../../layouts/corporate';
import { EMPLOYEES_DATA } from '../../../mocks/employes';
const { Title, Text, Paragraph } = Typography;
export const AboutContainer = () => {
  const stylesContext = useStylesContext();
  return (
    <CorporateLayouts>
      <Row {...stylesContext?.rowProps}>
        <Col span={24}>
          <Card title={<Title level={3}>About Design Sparx</Title>}>
            <Flex gap="small" vertical>
              <Text>Save time and resources by using our templates.</Text>
              <Image
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt="about us hero image"
                width="100%"
              />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                tellus orci ac auctor augue mauris augue. Id diam vel quam
                elementum pulvinar. Nunc scelerisque viverra mauris in. Tortor
                aliquam nulla facilisi cras fermentum odio eu. Eleifend mi in
                nulla posuere sollicitudin aliquam ultrices. Quis commodo odio
                aenean sed adipiscing diam donec adipiscing tristique. Pharetra
                magna ac placerat vestibulum lectus mauris ultrices. Viverra
                accumsan in nisl nisi scelerisque eu ultrices vitae. Etiam
                tempor orci eu lobortis elementum nibh tellus molestie nunc.
                Iaculis eu non diam phasellus vestibulum lorem sed risus
                ultricies. Vestibulum lectus mauris ultrices eros in cursus
                turpis. Risus nec feugiat in fermentum posuere urna nec. Nam at
                lectus urna duis.
              </Paragraph>
              <Paragraph>
                Sit amet purus gravida quis blandit turpis cursus. Vulputate eu
                scelerisque felis imperdiet proin fermentum leo vel orci. Fusce
                id velit ut tortor pretium viverra suspendisse potenti.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Our great team">
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 4
              }}
              pagination={{
                onChange: (page) => {
                  return page;
                },
                pageSize: 4,
                align: 'center'
              }}
              dataSource={EMPLOYEES_DATA}
              renderItem={(item: Employee) => (
                <List.Item key={item.employee_id}>
                  <EmployeeCard data={item} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Our statistics">
            <Row gutter={[8, 8]}>
              <Col lg={8}>
                <AntdCard hoverable={false} className="text-center">
                  <Title className="m-0">
                    <CountUp end={100} /> %
                  </Title>
                  <Text>Satisfaction</Text>
                </AntdCard>
              </Col>
              <Col lg={8}>
                <AntdCard hoverable={false} className="text-center">
                  <Title className="m-0">
                    <CountUp end={124} /> K
                  </Title>
                  <Text>Customers</Text>
                </AntdCard>
              </Col>
              <Col lg={8}>
                <AntdCard hoverable={false} className="text-center">
                  <Title className="m-0">
                    $<CountUp end={24} /> K
                  </Title>
                  <Text>Worth in transactions</Text>
                </AntdCard>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </CorporateLayouts>
  );
};
