'use client';
import { Card, FaqCollapse } from '@skeleton/shared';
import { Col, Row, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useStylesContext } from '../../../context/styles';
import { CorporateLayouts } from '../../../layouts/corporate';
import { FAQS_DATA } from '../../../mocks/faqs';

export const FaqsPageContainer = () => {
  const stylesContext = useStylesContext();
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const data = FAQS_DATA.map(({ category, items }) => {
      return {
        category,
        items: items?.map(({ question, answer, ...rest }) => ({
          ...rest,
          label: question?.slice(0, 50) + '...?',
          children: answer
        }))
      };
    });
    setFaqs(data);
  }, []);
  return (
    <CorporateLayouts>
      <Row {...stylesContext?.rowProps}>
        <Col span={24}>
          <Card title="Frequently askes questions (FAQs)">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {faqs.map((f: any) => (
                <>
                  <Typography.Text strong>{f.category}</Typography.Text>
                  <FaqCollapse items={f.items} accordion />
                </>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </CorporateLayouts>
  );
};
