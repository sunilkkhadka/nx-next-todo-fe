'use client';
import { Card, Employee, EmployeeCard } from '@skeleton/shared';
import { Col, List, Row } from 'antd';
import { useStylesContext } from '../../../context/styles';
import { CorporateLayouts } from '../../../layouts/corporate';
import { EMPLOYEES_DATA } from '../../../mocks/employes';

export const TeamContainer = () => {
  const stylesContext = useStylesContext();
  return (
    <CorporateLayouts>
      <Row {...stylesContext?.rowProps}>
        <Col span={24}>
          <Card title="Our team">
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
                pageSize: 10,
                align: 'center'
              }}
              dataSource={EMPLOYEES_DATA}
              renderItem={(item: Employee) => (
                <List.Item key={item.employee_id}>
                  <EmployeeCard data={item} showInfo={true} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </CorporateLayouts>
  );
};
