import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const Header = styled.div`
   
`;

export const Title =  styled.h1`
    font-size: 56px;
    font-weight: 400;
    text-align: center;
    margin-top: 92px;
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 410px;
    max-height: 239px;
    margin: 40px auto;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    max-width: 406px;
    width: 406px;
    max-height: 37px;
    height: 37px;
    min-height: 35px;
    border-radius: 8px;
    background-color: #FFF;
    text-align: center;
    outline: none;
    padding: 5px;
    font-size: 14px;
    border: none;
`;

export const Span = styled.span`
    font-size: 22px;
    text-align: center;
    font-weight: 500;
    line-height: 25px;
    width: 189px;
    height: 39px;
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 230px;
    height: 37px;
    background-color: #01A754;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 26px;
    transition: 800ms;
`;

export const BTNContainer = styled.div`
  &:hover {
    ${Button} {
      background-color: teal;
    }
  }
`;

export const TextButton  = styled.span`
    font-size: 18px;
    font-weight: 200;
    color: #FFF;
`;
