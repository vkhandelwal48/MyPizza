import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const Ul = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    display:flex;
    flex-flow:column;
    align-items:center;
    height:100%;

    @media (min-width:500px){
        flex-flow:row;
    }
`;

const navigationItems = () => (
        <Ul>
            <NavigationItem link="/" exact>Pizza Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </Ul>
);

export default navigationItems;
