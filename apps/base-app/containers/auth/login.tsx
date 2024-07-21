'use client';
import {
  GoogleOutlined,
  LineOutlined,
  LockOutlined,
  MailOutlined
} from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@skeleton/shared';
import { Divider, Flex, Typography } from 'antd';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
type InputType = z.infer<typeof schema>;
export const LoginContainer = () => {
  const t = useTranslations('Login');
  const { handleSubmit, control } = useForm<InputType>({
    resolver: zodResolver(schema)
  });
  const onSubmit = (data: InputType) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirectTo: '/'
    });
  };
  return (
    <LoginWrapperSection>
      <LoginFormContainer>
        <LoginTopContent>
          <Flex vertical justify={'center'} align={'center'}>
            <div style={{ position: 'relative' }}>
              <Image src="/logo.svg" alt="logo" width={150} height={40} />
            </div>
            <Typography.Title level={1}>login</Typography.Title>
            <Typography.Text type={'secondary'} className={'slug'}>
              Welcome back
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
            <Flex>
              <Typography.Text type={'secondary'} className={'forgot_password'}>
                {t('Forgot password')}
              </Typography.Text>{' '}
            </Flex>
            <Button type="primary" htmlType="submit">
              {t('login')}
            </Button>
          </Flex>
        </LoginFormContent>
        <Divider>Or</Divider>
        <Flex gap={8} className={'social_btns'} justify={'center'}>
          <Button
            icon={<GoogleOutlined />}
            type={'primary'}
            onClick={() => signIn('google', { redirectTo: '/' })}
            block
          >
            {t('Sign in with Google')}
          </Button>
          <Button
            icon={<LineOutlined />}
            onClick={() => signIn('line', { redirectTo: '/' })}
          >
            {'Sign in with Line'}
          </Button>
        </Flex>
      </LoginFormContainer>
    </LoginWrapperSection>
  );
};
