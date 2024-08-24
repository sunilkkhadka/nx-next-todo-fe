'use client';
import {
  CloudUploadOutlined,
  HomeOutlined,
  PieChartOutlined,
  PlusOutlined
} from '@ant-design/icons';
import {
  Card,
  PageHeader,
  Projects,
  ProjectsCard,
  RevenueCard
} from '@skeleton/shared';
import { Button, Col, Row, Segmented, Space } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { DASHBOARD_ITEMS } from '../../../constants';
import { CLIENTS_DATA } from '../../../mocks/clients';
import { PROJECTS_DATA } from '../../../mocks/projectsData';
import { ClientsTable } from './clients-table';
import { ProjectsTable } from './project-table';
import { RevenueColumnChart } from './revenue-column-chart';

const PROJECT_TABS = [
  {
    key: 'all',
    label: 'All projects'
  },
  {
    key: 'inProgress',
    label: 'Active'
  },
  {
    key: 'onHold',
    label: 'On Hold'
  }
];
export const ProjectDashboardContainer = () => {
  const [projectTabsKey, setProjectsTabKey] = useState<string>('all');

  const PROJECT_TABS_CONTENT: Record<string, React.ReactNode> = {
    all: <ProjectsTable key="all-projects-table" data={PROJECTS_DATA} />,
    inProgress: (
      <ProjectsTable
        key="in-progress-projects-table"
        data={PROJECTS_DATA.filter((_: Projects) => _.status === 'in progress')}
      />
    ),
    onHold: (
      <ProjectsTable
        key="on-hold-projects-table"
        data={PROJECTS_DATA.filter((_: Projects) => _.status === 'on hold')}
      />
    )
  };

  const onProjectsTabChange = (key: string) => {
    setProjectsTabKey(key);
  };
  return (
    <div>
      <PageHeader
        title="Projects Dashboard"
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>home</span>
              </>
            ),
            path: '/'
          },
          {
            title: (
              <>
                <PieChartOutlined />
                <span>dashboards</span>
              </>
            ),
            menu: {
              items: DASHBOARD_ITEMS.map((d) => ({
                key: d.title,
                title: <Link href={d.path}>{d.title}</Link>
              }))
            }
          },
          {
            title: 'projects'
          }
        ]}
      />
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 }
        ]}
      >
        <Col xs={24} sm={12} lg={6}>
          <RevenueCard title="Total revenue" value={1556.3} diff={280} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <RevenueCard title="Spent this week" value={1806.3} diff={180} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <RevenueCard title="Worked this week" value="35:12" diff={-10.0} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <RevenueCard title="Worked today" value="05:30:00" diff={-20.1} />
        </Col>
        <Col span={24}>
          <Card
            title="Recently added projects"
            extra={<Button>View all projects</Button>}
          >
            <Row gutter={[16, 16]}>
              {PROJECTS_DATA.slice(0, 4).map((o: Projects) => {
                return (
                  <Col xs={24} sm={12} xl={6} key={o.project_id}>
                    <ProjectsCard
                      project={o}
                      type="inner"
                      style={{ height: '100%' }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={16}>
          <Card
            title="Project stats"
            extra={
              <Segmented
                options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
              />
            }
          >
            <RevenueColumnChart />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={8}>
          <Card title="Top clients">
            <ClientsTable data={CLIENTS_DATA.slice(0, 5)} />
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Projects"
            extra={
              <Space>
                <Button icon={<CloudUploadOutlined />}>Import</Button>
                <Button icon={<PlusOutlined />}>New project</Button>
              </Space>
            }
            tabList={PROJECT_TABS}
            activeTabKey={projectTabsKey}
            onTabChange={onProjectsTabChange}
          >
            {PROJECT_TABS_CONTENT[projectTabsKey]}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
