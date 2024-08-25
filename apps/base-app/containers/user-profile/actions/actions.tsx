'use client';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Row,
  Switch,
  Typography
} from 'antd';
import { CSSProperties, ReactNode } from 'react';
import { useStylesContext } from '../../../context/styles';
import { UserProfileLayout } from '../user-profile-layout';
const { Text } = Typography;

const dividerStyles: CSSProperties = {
  margin: `8px 0`
};

type ActionItemProps = {
  title: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
};

const ActionItem = ({ children, extra, title }: ActionItemProps) => {
  return (
    <Flex vertical gap="middle" align="flex-start">
      <Text strong>{title}</Text>
      {children}
      {extra}
      <Divider style={dividerStyles} />
    </Flex>
  );
};
export const UserActionsContainer = () => {
  const styleContext = useStylesContext();
  return (
    <UserProfileLayout>
      <Row {...styleContext?.rowProps}>
        <Col xs={24} lg={12} xl={8}>
          <Card title="Advanced" style={{ height: '100%' }}>
            <Flex vertical>
              <ActionItem
                title="Auto accept project invites"
                extra={
                  <Text>
                    Automatically accept project invites from known
                    collaborators.
                  </Text>
                }
              >
                <Switch defaultChecked onChange={() => null} />
              </ActionItem>
              <ActionItem
                title="Experimental features"
                extra={
                  <Button
                    icon={<QuestionCircleOutlined />}
                    type="link"
                    size="small"
                  >
                    Learn more about experimental features
                  </Button>
                }
              >
                <Switch onChange={() => null} />
              </ActionItem>
              <ActionItem title="Clear local data">
                <Button type="default" icon={<SyncOutlined />}>
                  Reload
                </Button>
              </ActionItem>
            </Flex>
          </Card>
        </Col>
        <Col xs={24} lg={12} xl={8}>
          <Card title="Export content" style={{ height: '100%' }}>
            <Flex vertical>
              <ActionItem
                title="Export workspace content"
                extra={
                  <Button
                    icon={<QuestionCircleOutlined />}
                    type="link"
                    size="small"
                  >
                    Learn about exporting workspaces
                  </Button>
                }
              >
                <Button>Export all workspace content</Button>
              </ActionItem>
              <ActionItem
                title="Export members"
                extra={
                  <Button
                    icon={<QuestionCircleOutlined />}
                    type="link"
                    size="small"
                  >
                    Learn about exporting members
                  </Button>
                }
              >
                <Button>Export members as CSV</Button>
              </ActionItem>
            </Flex>
          </Card>
        </Col>
        <Col xs={24} lg={12} xl={8}>
          <Card title="Danger zone" style={{ height: '100%' }}>
            <ActionItem
              title="Delete account"
              extra={
                <Button
                  icon={<QuestionCircleOutlined />}
                  type="link"
                  size="small"
                >
                  Learn about deleting account
                </Button>
              }
            >
              <Button danger>Delete account</Button>
            </ActionItem>
          </Card>
        </Col>
      </Row>
    </UserProfileLayout>
  );
};
