import React from 'react';
import styled from 'styled-components';

const DrawerToggle = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
`;

const Div = styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
`;


const drawerToggle = (props) => (
    <DrawerToggle onClick={props.clicked}>
        <Div></Div>
        <Div></Div>
        <Div></Div>
    </DrawerToggle>
    );

export default drawerToggle;