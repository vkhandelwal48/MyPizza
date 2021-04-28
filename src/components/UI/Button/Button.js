import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
   
    &:first-of-type{
        margin-left: 0;
        padding-left: 0;
    }
`;

const button = (props) => (
    <Button onClick={props.clicked}>{props.children}</Button>
);

export default button;