import React, {Component} from 'react';
import logo from '../../assets/img/logo_kvb.png';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img src={logo} className="logo"/>
                <span className="short-line">|</span>
                <span className="title">Open an Account 开立帐户</span>

                {/* <div className="clearfix"></div>
                <div className="float-right">
                    <Link to="/cn" className="btn btn-light">中文</Link>
                    <Link to="/en" className="btn btn-light">English</Link>
                </div>  */}
            </header>
        );
    }
}

export default Header;