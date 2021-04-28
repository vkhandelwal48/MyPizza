import React, {Component} from 'react';
import Aux from '../../hoc/Beep';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Wrapper = styled.div`
    margin-top:72px;
`;


class Layout extends Component {
    state = {
        showSideDrawer:false
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
                return { showSideDrawer : !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                    />
            <Wrapper>
                <main>{this.props.children}</main>
            </Wrapper>
        </Aux>)
    }
}
   

export default Layout;