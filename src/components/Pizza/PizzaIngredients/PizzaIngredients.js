import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pizza1 = styled.div`
    position: relative;
    top: 50px;
    left: 450px;
`;

const Crust = styled.div`
    width: 500px;
    height: 500px;
    background: burlywood;
    border-radius: 250px;
    -webkit-border-radius: 250px;
    -moz-border-radius: 250px;
`;

const Cheese = styled.div`
    width: 400px;
    height: 400px;
    background: gold;
    border-radius: 200px;
    position: relative;
    top: -450px;
    left: 50px;
`;


const Pep1 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -800px;
    left: 125px;
`;

const Pep2 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -730px;
    left: 80px;
`;

const Pep3 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -700px;
    left: 215px;
`;

const Pep4 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -925px;
    left: 210px;
`;

const Pep5 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -1100px;
    left: 300px;
`;

const Pep6 = styled.div`
    width: 75px;
    height: 75px;
    background: firebrick;
    border-radius: 37.5px;
    position: relative;
    top: -1027px;
    left: 350px;
`;

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('pizza'):
                ingredient = <Pizza1></Pizza1>;
                break;
            case ('crust'):
                ingredient = <Crust></Crust>;
                break;
            case ('cheese'):
                ingredient = <Cheese></Cheese>;
                break;
            case ('pep1'):
                ingredient = <Pep1></Pep1>;
                break;
            case ('pep2'):
                ingredient = <Pep2></Pep2>;
                break;
            case ('pep3'):
                ingredient = <Pep3></Pep3>;
                break;
            case ('pep4'):
                ingredient = <Pep4></Pep4>;
                break;
            case ('pep5'):
                ingredient = <Pep5></Pep5>
                break;
            case ('pep6'):
                ingredient = <Pep6></Pep6>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}
PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default PizzaIngredient;