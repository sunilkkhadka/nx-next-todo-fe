'use client';
import { Breadcrumb, BreadcrumbProps, Divider, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled.div`
  .page-header-breadcrumbs .ant-breadcrumb-link {
    text-transform: capitalize !important;
  }

  .ant-dropdown .ant-dropdown-menu-item .ant-dropdown-menu-title-content {
    text-transform: capitalize !important;
  }
`;

type Props = {
  title: string;
  breadcrumbs: BreadcrumbProps['items'];
} & React.HTMLAttributes<HTMLDivElement>;

export const PageHeader = ({ breadcrumbs, title, ...others }: Props) => {
  return (
    <StyledPageHeader {...others}>
      <Space direction="vertical" size="small">
        <Typography.Title
          level={4}
          style={{ padding: 0, margin: 0, textTransform: 'capitalize' }}
        >
          {title}
        </Typography.Title>
        <Breadcrumb items={breadcrumbs} className="page-header-breadcrumbs" />
      </Space>
      <Divider orientation="right" plain>
        <span style={{ textTransform: 'capitalize' }}>{title}</span>
      </Divider>
    </StyledPageHeader>
  );
};
