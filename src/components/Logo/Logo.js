import React from 'react';
import PizzaLogo from '../../assests/images/Pizza.png';
import styled from 'styled-components';

const Logo = styled.div`
    padding:8px;
    height:100%;
    background-color:white;
    box-sizing:border-box;
    border-radius:5px;
`;

const Img = styled.div`
    height:100%;
`;

const logo = (props) => (
    <div>
        <Logo style={{ height: props.height }}>
            <img src={PizzaLogo} alt="MyPizza" height="56px" width="50px" />
        </Logo>
    </div>
    );


export default logo;