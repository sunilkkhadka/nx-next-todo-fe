'use client';
import { Input as AntdInput, InputProps } from 'antd';
import styled from 'styled-components';

const StyledInput = styled.div`
  .form-item {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.5rem;
  }
  .form-item-error {
    color: red;
  }
`;
interface Props extends InputProps {
  label?: string;
  id?: string;
  error?: string;
}
const Input = ({ label, id, type = 'text', error, ...rest }: Props) => {
  const InputType = () => {
    switch (type) {
      case 'password':
        return <AntdInput.Password type="password" {...rest} />;
      default:
        return <AntdInput type={type} {...rest} />;
    }
  };
  return (
    <StyledInput>
      <div className="form-item">
        <label htmlFor={id}>{label}</label>
        {InputType()}
        <div className={'form-item-error'}>{error || ''}</div>
      </div>
    </StyledInput>
  );
};
Input.DisplayName = 'Input';
export { AntdInput, Input };
