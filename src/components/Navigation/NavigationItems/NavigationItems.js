import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = styled.div`
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
    <NavigationItems>
        <ul>
            <NavigationItem link="/">Pizza Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    </NavigationItems>
    );

export default navigationItems;
