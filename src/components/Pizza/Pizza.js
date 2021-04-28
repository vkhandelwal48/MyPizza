import React from 'react';
import styled from 'styled-components';
import PizzaIngredients from './PizzaIngredients/PizzaIngredients';

const Pizza = styled.div`
    width:100%;
    margin:auto;
    height:250px;
    overflow:scroll;
    text-align:center;
    font-weight:bold;
    font-size:1.2rem;   

    @media (min-width:1000px) and (min-height:700px){
        width:700px;
        height:600px;
    }
    
    @media (min-width:500px) and (min-height:401px){
        width:350px;
        height:300px;
    }

    @media (min-width:500px) and (min-height:400px){
        width:450px;
        height:400px;
    }
`;

const pizza = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredients key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el)=> {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div>
            <Pizza>
                <PizzaIngredients type="pizza" />
                <PizzaIngredients type="crust" />
                <PizzaIngredients type="cheese"/>
                {transformedIngredients}
            </Pizza>

        </div>
        );
};

export default pizza;
