import styled from '@emotion/styled';

export const OptionsUl = styled.ul`
  margin-top: 10px;
  text-align: center;
`;

export const OptionsLi = styled.li`
  display: inline-block;
  margin-right: 10px;

  & button:hover {
    background-color: #7fffd4;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgray;
  padding: 10px;
`;
