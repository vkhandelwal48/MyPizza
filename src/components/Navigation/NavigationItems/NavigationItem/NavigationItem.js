import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Li = styled.li`
    margin: 10px 0;
    box-sizing:border-box;
    display:block;
    width:100%;
    align-items:center;
    
    @media (min-width:500px){
        margin:0;
        box-sizing:border-box;
        display:flex;
        height:100%;
        align-items:center;
        width:auto;
    }
`;

const StyledLink = styled(NavLink)`
    color:8F5C2C;
    text-decoration:none;
    width:100%;
    box-sizing:border-box;
    display:block;
   
    &:hover{
        background-color:#8F5C2C;
        border-bottom:4px solid #40A4C8;
        color:white;
    }

    &:active{
        background-color:#8F5C2C;
        border-bottom:4px solid #40A4C8;
        color:white;
    }
 
    @media (min-width:500px){
        color:white;
        text-decoration:none;
        height:100%;
        padding:16px 4px;
        border-bottom:4px solid transparent;
        box-sizing:border-box;
        display:block;
    }
`;

const navigationItem = (props) =>
    (
    <Li>
        <StyledLink exact={props.exact} to={props.link}>{props.children}</StyledLink>
    </Li>
    );

export default navigationItem;