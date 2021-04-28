import React from 'react';
import styled from 'styled-components';

const Control = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:5px 0;
`;

const Button = styled.div`
    &:hover{
    background-color: #AC9980;
    color: #ccc;
    }
`;

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const Less = styled.button`
    display : block;
    font : inherit;
    margin : 0 5px;
    padding : 5px;
    width : 80px;
    border : 1px solid #AA6817;
    cursor : pointer;
    outline : none;
    background-color: #D39952;
    color: white;

     &:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
    }

    &:hover{
        background-color: #DAA972;
        color: white;
        cursor: not-allowed;
    } 
  
    &:active{
        background-color: #DAA972;
        color: white;
    }
`;

const More = styled.button`
    display : block;
    font : inherit;
    margin : 0 5px;
    padding : 5px;
    width : 80px;
    border : 1px solid #AA6817;
    cursor : pointer;
    outline : none;
    background-color: #8F5E1E;
    color: white;

    &:hover{
        background-color: #99703F;
        color: white; 
    }
 
    &:active{
        background-color: #99703F;
        color: white;
    }
`;

const buildControl = (props) => (
    <Control>
         <Label>{props.label}</Label>
         <Less onClick={props.removed} disabled={props.disabled}>Less</Less>
         <More onClick={props.added}>More</More>
    </Control>
);

export default buildControl;