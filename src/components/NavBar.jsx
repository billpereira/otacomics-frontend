import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo-otacomics.png';
import styled from 'styled-components';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="nav_wrapper btn_header navbar navbar-expand-sm navbar-dark px-sm-5 navbar-fixed-top nav-justified">
				<Link to="/">
					<img
						src={Logo}
						className="navbar-brand logo_header"
						alt="logo_otacomics"
					/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Camisetas
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Livros
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Eventos
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Blog
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Games
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							TCG
						</Link>
					</li>
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Contato
						</Link>
					</li>
				</ul>
				{/* <input className="search"></input>
				<button className="btn-search"><i className="fas fa-cart-plus" /></button> */}
				{/* <li className="ml-auto"> */}
				<Link to="/cart" className="ml-auto">
					<button>
						{/* <ButtonContainer> */}
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						Carrinho
					</button>
					{/* </ButtonContainer> */}
				</Link>
				{/* </li> */}
			</nav>
		);
	}
}

// const ButtonContainer = styled.button`
// 	text-transform: capitalize;
//   font-size: 1.4rem;
//   background: transparent;
//   border: 0.05rem solid #cf7c00;
//   color: #cf7c00;
//   border-radius: 0.5rem;
//   padding: 0.2rem 0.5rem;
//   cursor: pointer;
//   margin:0.2rem 0.5rem;
//   transition: all 0.5s ease-in-out;
//   &:hover{
//     background: #cf7c00;
//     color: #fff;
//   }
// `;
