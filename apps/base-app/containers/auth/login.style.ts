import { Layout } from 'antd';
import styled from 'styled-components';
const { Header, Content } = Layout;
export const StyledHeader = styled(Header)`
  height: 550px !important;
  padding-top: 134.8px !important;
  border-radius: 20px !important;
  text-align: center !important;
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05) !important;
  background-position: 50% !important;
  background-image: url('https://demos.creative-tim.com/muse-ant-design-dashboard-pro/static/media/bg-signup.ef2625bc.jpg') !important;
  background-size: cover !important;
  position: relative !important;
  * {
    color: #fff !important;
  }
  .content {
    padding-top: 40px;
    max-width: 480px;
    margin: auto;
    position: relative;
    z-index: 9;
    h1,
    p {
    }
  }

  &::before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: ' ';
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px !important;
  }
`;

export const StyledContent = styled(Content)`
  width: 100% !important;
  max-width: 500px !important;
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05) !important;
  border-radius: 12px !important;
  margin: -190px auto 20px !important;
  background-color: #0958d9;
  z-index: 99 !important;
`;

export const LoginTopContent = styled.div`
  h1 {
    font-size: 30px !important;
    margin: 15px 0 !important;
  }
  .slug {
    text-align: center;
  }
  margin-bottom: 2em;
`;
export const LoginFormContent = styled.div`
  .forgot_password {
    text-align: right;
    color: blue !important;
    cursor: pointer;
  }
`;
