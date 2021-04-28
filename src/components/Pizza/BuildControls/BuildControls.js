import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const Controls = styled.div`
    width : 100%;
    background-color : #CF8F2E;
    display : flex;
    flex-flow : column;
    align-items : center;
    box-shadow : 0 2px 1px #ccc;
    margin : auto;
    padding : 10px 0;
`;

const OrderButton = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
   
    &:hover{
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
    &:active{
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
    &:disabled{
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }
`;

const controls = [
    { label: 'Pep1', type: 'pep1' },
    { label: 'Pep2', type: 'pep2' },
    { label: 'Pep3', type: 'pep3' },
    { label: 'Pep4', type: 'pep4' },
    { label: 'Pep5', type: 'pep5' },
    { label: 'Pep6', type: 'pep6' },
];

const buildControls = (props) => (
        <Controls>
            <p>Current Price:<strong>{props.price}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))}
            <OrderButton
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</OrderButton>
        </Controls>

);

export default buildControls;