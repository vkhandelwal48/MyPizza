import React from 'react';
import styled from 'styled-components';

const Input = styled.div`
    width:100%;
    padding:10px;
    box-sizing:border-box;
`;

const Label = styled.label`
    font-weight:bold;
    display:block;
    margin-bottom:8px;
`;

const Input1 = styled.input`
    outline:none;
    border:1px solid #ccc;
    background-color:white;
    font:inherit;
    padding:6px 10px;
    display:block;
    width:100%;
    box-sizing:border-box;

    &:focus{
        outline:none;
        background-color:#ccc;
    }
`;

const Textarea = styled.textarea`
    outline:none;
    border:1px solid #ccc;
    background-color:white;
    font:inherit;
    padding:6px 10px;
    display:block;
    width:100%;
    box-sizing:border-box;

    &:focus{
        outline:none;
        background-color:#ccc;
    }
`;

const Select = styled.select`
    outline:none;
    border:1px solid #ccc;
    background-color:white;
    font:inherit;
    padding:6px 10px;
    display:block;
    width:100%;
    box-sizing:border-box;

    &:focus{
        outline:none;
        background-color:#ccc;
    }
`;


const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <Input1 {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <Textarea {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement =
                <Select
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value} onChange={props.changed}>
                        {option.displayValue}
                    </option>
                    ))}
                </Select>;
            break;
        default:
            inputElement = <Input1 {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    return (
        <Input>
            <Label>{props.label}</Label>
            {inputElement}
        </Input>
    );
}



export default input;