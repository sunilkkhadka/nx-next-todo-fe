import styled from 'styled-components';
const themes = {
  colors: {
    primary: {
      light: '#f5f5f5',
      dark: '#f5f5f5'
    },
    secondary: {
      light: '#f5f5f5',
      dark: '#f5f5f5'
    }
  }
};

export const LoginWrapperSection = styled.div`
  height: 100vh;
  width: 100%;
  background: ${themes.colors.primary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LoginFormContainer = styled.div`
  background: ${themes.colors.primary.light};
  width: 400px;
  background-color: #ffff;
  height: auto;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.02) 0px 1px 6px -1px, rgba(0, 0, 0, 0.02) 0px 2px 4px 0px;
  margin: 0px auto;
  padding: 2em;
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
