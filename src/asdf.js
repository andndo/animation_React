import styled from "styled-components";
import { keyframes } from "styled-components";

export const Body = styled.body`
  background-color: #fff;
`;

export const MainDiv = styled.div`
  background-color: #000;
  text-align: center;
  width: 2000px;
  margin-left: 280px;
  -webkit-transition: background-color 2s, -webkit-transform 2s;
  transition: background-color 2s, transform 2s;

  :hover {
    background-color: #ffcccc;
    //width: 200px;
    //height: 2000px;
    font-family: "Pacifico", cursive;
  }
`;

export const move = keyframes`
	//단계 별로 변화를 주는 코드
	0%{
    	top: 20px;
        left: 20px;
        background:green;
    }
    
    30%{
    	top: 50px;
        background:orange;
    }
    
    50%{
    	top: 100px;
        opacity: 0;
        left: 200px;
    }
    
    70%{
    	top: 150px;
        background: blue;
    }
    
    100%{
    	top: 20px;
        background: green;
        opacity: 1;
    }
`;

export const Bt = styled.button`
  color: blue;
  background-color: black;
  height: 190px;
  width: 300px;
  font-size: 100px;
  font-weight: bold;
  border-bottom: blue 20px solid;
  animation: ${move} 1s linear infinite;
`;

export const H1 = styled.h1`
  color: #9c0ca1;
  font-size: 150px;
  background-color: #fff;
  text-shadow: -7px 0 1px cyan, 7px 0 1px red;
`;
