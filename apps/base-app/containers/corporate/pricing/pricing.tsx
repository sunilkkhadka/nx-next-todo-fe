'use client';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Card } from '@skeleton/shared';
import {
  Card as AntdCard,
  Col,
  List,
  Row,
  Segmented,
  Space,
  theme,
  Typography
} from 'antd';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useStylesContext } from '../../../context/styles';
import { CorporateLayouts } from '../../../layouts/corporate';

const PRICING_DATA = [
  {
    plan: 'free',
    monthly: 0,
    annually: 0,
    savings_caption: 'Save 0%',
    features: [
      'Basic Dashboard Templates',
      'Limited Widgets and Customization Options',
      'Email Support'
    ],
    color: 'purple'
  },
  {
    plan: 'pro',
    monthly: 9.99,
    annually: 99.99,
    savings_caption: 'Save 17%',
    features: [
      'Advanced Dashboard Templates',
      'Rich Widgets and Customization Options',
      'Priority Email Support',
      'Data Export and Import',
      'Access to Premium Templates Library'
    ],
    color: 'maroon',
    preferred: true
  },
  {
    plan: 'enterprise',
    monthly: 29.99,
    annually: 299.99,
    savings_caption: 'Save 17%',
    features: [
      'Enterprise-grade Dashboard Templates',
      'Unlimited Widgets and Customization Options',
      '24/7 Priority Support',
      'Dedicated Account Manager',
      'Advanced Data Security and Compliance',
      'API Access and Integration Support'
    ],
    color: 'cyan'
  }
];
const textStyles = (
  preferred?: boolean,
  primary?: string
): React.CSSProperties => {
  return {
    color: preferred ? 'white' : primary ? primary : 'initial',
    textTransform: 'capitalize',
    textAlign: 'center'
  };
};

export const PricingContainer = () => {
  const stylesContext = useStylesContext();
  const {
    token: { colorPrimary, colorFillSecondary }
  } = theme.useToken();
  const [value, setValue] = useState<'monthly' | 'annually' | string | number>(
    'monthly'
  );
  return (
    <CorporateLayouts>
      <Card
        title="Pricing"
        actions={[
          <Typography.Text italic key="secondary">
            Note: All plans come with a 30-day money-back guarantee.
          </Typography.Text>
        ]}
      >
        <>
          <div
            className="text-capitalize text-center"
            style={{ marginBottom: '1rem', textAlign: 'center' }}
          >
            <Segmented
              size="large"
              options={['monthly', 'annually']}
              value={value}
              onChange={setValue}
            />
          </div>
          <Row {...stylesContext?.rowProps}>
            {PRICING_DATA?.map((d, i) => (
              <Col sm={24} lg={8} key={`${d.color}-${i}`}>
                <AntdCard
                  style={{
                    background: d.preferred ? colorPrimary : colorFillSecondary,
                    border: `1px solid ${
                      d.preferred ? colorPrimary : colorFillSecondary
                    }`
                  }}
                >
                  <Typography.Text
                    strong
                    style={{
                      ...textStyles(d.preferred, colorPrimary),
                      fontSize: 16
                    }}
                  >
                    {d.plan}
                  </Typography.Text>
                  <Typography.Title
                    style={{ margin: '1rem 0', ...textStyles(d.preferred) }}
                  >
                    ${' '}
                    <CountUp
                      decimals={2}
                      end={value === 'monthly' ? d.monthly : d.annually}
                    />
                    /
                    <small
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        textTransform: 'lowercase'
                      }}
                    >
                      per {value === 'monthly' ? 'month' : 'year'}
                    </small>
                  </Typography.Title>
                  <List
                    header={
                      <Typography.Text style={textStyles(d.preferred)}>
                        Features
                      </Typography.Text>
                    }
                    dataSource={d.features}
                    renderItem={(item) => (
                      <List.Item>
                        <Space>
                          <CheckCircleOutlined
                            style={textStyles(d.preferred)}
                          />
                          <Typography.Text style={textStyles(d.preferred)}>
                            {item}
                          </Typography.Text>
                        </Space>
                      </List.Item>
                    )}
                  />
                </AntdCard>
              </Col>
            ))}
          </Row>
        </>
      </Card>
    </CorporateLayouts>
  );
};
