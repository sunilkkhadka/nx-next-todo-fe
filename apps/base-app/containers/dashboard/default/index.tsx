'use client';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import {
  Card,
  GetStartedCard,
  NotificationsCard,
  PageHeader,
  Projects,
  ProjectsCard,
  TasksChartCard,
  TasksListCard,
  WeeklyActivityCard
} from '@skeleton/shared';
import {
  Button,
  Carousel,
  CarouselProps,
  Col,
  Flex,
  Row,
  Typography
} from 'antd';
import Link from 'next/link';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { DASHBOARD_ITEMS } from '../../../constants';
import { useStylesContext } from '../../../context/styles';
import { ACTIVITY_DATA, TASKS_DATA } from '../../../mocks';
import { TasksList } from '../../../mocks/TasksList';
import { NOTIFICATION_DATA } from '../../../mocks/notifications';
import { PROJECTS_DATA } from '../../../mocks/projectsData';
const CAROUSEL_PROPS: CarouselProps = {
  slidesToShow: 1,
  slidesToScroll: 1
};
export const DefaultDashboardContainer = () => {
  const stylesContext = useStylesContext();
  const sliderRef1 = useRef<any>(null);
  const sliderRef2 = useRef<any>(null);
  return (
    <div>
      <PageHeader
        title="Default Dashboard"
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
            title: 'default'
          }
        ]}
      />
      <Row {...stylesContext?.rowProps}>
        <Col xs={24} lg={18}>
          <Row {...stylesContext?.rowProps}>
            <Col xs={24} md={24}>
              <Row {...stylesContext?.rowProps}>
                <Col xs={24} lg={18}>
                  <GetStartedCard
                    imgUrl={'/get-started.png'}
                    style={{
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 8
                    }}
                  />
                </Col>
                <Col xs={24} lg={6}>
                  <Row {...stylesContext?.rowProps}>
                    <Col xs={12} lg={24}>
                      <Card>
                        <Flex vertical align="center" gap="middle">
                          <Typography.Title style={{ margin: 0 }}>
                            <CountUp end={10} />+
                          </Typography.Title>
                          <Typography.Text>Projects</Typography.Text>
                        </Flex>
                      </Card>
                    </Col>
                    <Col xs={12} lg={24}>
                      <Card>
                        <Flex vertical align="center" gap="middle">
                          <Typography.Title style={{ margin: 0 }}>
                            <CountUp end={60} />+
                          </Typography.Title>
                          <Typography.Text>Tasks</Typography.Text>
                        </Flex>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={24} lg={12}>
              <WeeklyActivityCard data={ACTIVITY_DATA} />
            </Col>
            <Col xs={24} lg={12}>
              <TasksChartCard data={TASKS_DATA} />
            </Col>
            <Col span={24}>
              <TasksListCard data={TasksList} loading={false} />
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={6}>
          <Row {...stylesContext?.rowProps}>
            <Col span={24}>
              <Card
                title="Ongoing projects"
                extra={<Button>View all</Button>}
                bordered={false}
              >
                <Carousel
                  ref={sliderRef1}
                  {...stylesContext?.carouselProps}
                  {...CAROUSEL_PROPS}
                >
                  {PROJECTS_DATA.filter(
                    (o: Projects) => o.status.toLowerCase() === 'in progress'
                  )
                    .slice(0, 4)
                    .map((o: Projects) => (
                      <ProjectsCard
                        key={o.project_id}
                        project={o}
                        size="small"
                        style={{ margin: `0 8px` }}
                      />
                    ))}
                </Carousel>
              </Card>
            </Col>
            <Col span={24}>
              <Card
                title="Queued projects"
                extra={<Button>View all</Button>}
                bordered={false}
              >
                <Carousel
                  ref={sliderRef2}
                  {...stylesContext?.carouselProps}
                  {...CAROUSEL_PROPS}
                >
                  {PROJECTS_DATA.filter(
                    (o: Projects) => o.status.toLowerCase() === 'on hold'
                  )
                    .slice(0, 4)
                    .map((o: Projects) => (
                      <ProjectsCard
                        key={o.project_id}
                        project={o}
                        size="small"
                        style={{ margin: `0 8px` }}
                      />
                    ))}
                </Carousel>
              </Card>
            </Col>
            <Col span={24}>
              <NotificationsCard data={NOTIFICATION_DATA} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
