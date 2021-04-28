import React from 'react';
import Aux from '../../../hoc/Beep';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const Success = styled.div`
    color: #5C9210;
`;

const Danger = styled.div`
    color: #944317;
`;

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancelled}>
                <Danger>CANCEL</Danger>
            </Button>
            <Button clicked={props.purchaseContinued}>
                <Success>CONTINUE</Success>
            </Button>
        </Aux>
    );
};
export default orderSummary;