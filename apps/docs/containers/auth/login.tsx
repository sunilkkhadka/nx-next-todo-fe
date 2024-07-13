'use client';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@skeleton/shared';
import { Flex, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import {
  LoginFormContainer,
  LoginFormContent,
  LoginTopContent,
  LoginWrapperSection
} from './login.style';
const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Please enter your email address' })
      .email({ message: 'Please enter a valid email address' }),
    password: z.string().min(4, { message: 'Please enter your password' })
  })
  .required();
export const Login = () => {
  const t = useTranslations('Login');
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema)
  });
  const onSubmit = () => null;
  return (
    <LoginWrapperSection>
      <LoginFormContainer>
        <LoginTopContent>
          <Flex vertical justify={'center'} align={'center'}>
            <div>TO</div>
            <Typography.Title level={1}>{t('login')}</Typography.Title>
            <Typography.Text type={'secondary'} className={'slug'}>
              Welcome back to RTW next skeleton! Please enter your details below
              to sign in.
            </Typography.Text>
          </Flex>
        </LoginTopContent>
        <LoginFormContent>
          <Flex
            component={'form'}
            vertical
            gap={25}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  label={t('Email')}
                  placeholder={'Email'}
                  size={'middle'}
                  id="email"
                  prefix={<MailOutlined />}
                  {...field}
                  error={(errors.email?.message as string) || ''}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  label={t('Password')}
                  placeholder={'Password'}
                  size={'middle'}
                  type="password"
                  id="password"
                  prefix={<LockOutlined />}
                  {...field}
                  error={(errors.password?.message as string) || ''}
                />
              )}
            />

            <Button type="primary" htmlType="submit">
              {t('login')}
            </Button>
          </Flex>
        </LoginFormContent>
      </LoginFormContainer>
    </LoginWrapperSection>
  );
};
