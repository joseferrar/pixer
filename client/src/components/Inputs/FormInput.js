import styled from "styled-components";

const FormInput = styled.input`
  font-size: 15px;
  padding: 14px;
  border: 1px solid #ccc !important;
  border-radius: 5px;
  ::placeholder {
    color: gray;
  }
  &:hover {
    border: 1px solid gray;
    border-color: #07bc0c;
  }
  &:input:focus {
    border-color: #07bc0c !important;
  }
`;

export { FormInput };
