import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 400px;
`;

export const Button = styled.button`
  padding: 4px;
  border: 2px solid #bfe7e5f8;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  background-color: #1cc3d6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: scale(1.05);
    background: red;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    color: #FFF;
    border: 2px solid red;
`;

export const Loading = styled.div`
margin: 0 ;
top: 553px;
left:540px;
color: #cbeaed;
font-size: 25px;
`;