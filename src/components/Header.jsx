import React, { Component } from 'react';
import Logo from '../img/logo-otacomics.png';
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa';
import TopBar from './TopBar';
import MainMenu from './MainMenu';
// import {} from 'react-icons/fa';

// import { Container } from './styles';

export default class Header extends Component {
	render() {
		return (
			<div>
			<TopBar/>
			<div className="row mainBar">
				<div className="container header-align">
					<div className="header-box">
						<img src={Logo} className="logo_header" alt="logo_otacomics"/>
					</div>
					

					<div className="header-box circle"><FaShoppingCart/></div>
					{/* <span>Carrinho | Login</span> */}
				</div>
			</div>
			<MainMenu/>
			</div>
		);
	}
}
