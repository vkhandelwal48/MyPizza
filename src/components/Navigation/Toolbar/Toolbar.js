import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = styled.div`
    height:56px;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background-color:#703B09;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 20px;
    box-sizing:border-box;
    z-index:90;
`;

const Nav = styled.div`
    height:100%;
`;

const toolbar = (props) => (
    <header>
        <Toolbar>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo height="80%" />
            <Nav>
                <NavigationItems />
            </Nav>
        </Toolbar>
    </header>
    );

export default toolbar;