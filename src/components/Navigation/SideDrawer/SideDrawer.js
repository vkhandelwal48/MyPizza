import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Beep';


const SideDrawer = styled.div`
    position:fixed;
    width:280px;
    max-width:70%;
    height:100%;
    top:0;
    left:0;
    z-index:200;
    background-color:white;
    padding:32px 16x;
    box-sizing:border-box;
    transition: transfrom 0.3s ease-out;

    @media (min-width:500px){
        display:none;
    }
`;

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div>
                <SideDrawer>
                    <Logo height="11%" margin="32px"/>
                    <nav>
                        <NavigationItems />
                    </nav>
                </SideDrawer>
            </div>
        </Aux>
    )
};

export default sideDrawer;