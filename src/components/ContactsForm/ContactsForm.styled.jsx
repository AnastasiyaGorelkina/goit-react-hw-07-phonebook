import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #cbeaed;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover, :focus {
    transform: scale(1.05);
    background: #cbeaed;
    box-shadow: 5px 3px 10px 1px;
    color: black;
  }
`;

export const Add = styled.button`
  display: block;
  margin: 0px auto;
  padding: 8px;
  border: 2px solid rgb(8, 41, 17);
  border-radius: 4px;
  cursor: pointer;
  color: black;
  background-color:#81dee8e1;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: scale(1.05);
    background: green;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    color: #fff;
  }
`;