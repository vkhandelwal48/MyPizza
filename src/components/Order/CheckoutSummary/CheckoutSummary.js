import React from 'react';
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const Success = styled.div`
    color: #5C9210;
`;

const Danger = styled.div`
    color: #944317;
`;

const CheckoutSummary1 = styled.div`
    text-align:center;
    width:80%;
    margin:auto;

    @media (min-width:600px){
        width:500px;
    }
`;

const CheckoutSummary = (props) => {
    return (
        <CheckoutSummary1>
            <h1>We hope It Tastes Well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Pizza ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled}>
                <Danger>CANCEL</Danger>
            </Button>
            <Button clicked={props.checkoutContinued}>
                <Success>CONTINUE</Success>
            </Button>
        </CheckoutSummary1>
    );
}

export default CheckoutSummary;