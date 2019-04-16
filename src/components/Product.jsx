import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import PropTypes from 'prop-types'

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;

		return (
			<div className="col-9 mx-auto col-md-6 col-lg-3 product-wrapper">
				<div className="card cartOver">
					<div
						className="img-container p-5"
						onClick={console.log('you clicked me on the image container')}
					>
						<Link to="/details">
							<img src={img} alt="product" className="card-img-top" />
						</Link>
						<button
							className="cart-btn"
							disabled={inCart ? true : false}
							onClick={() => {
								console.log('added to cart',id);
							}}
						>
							{inCart ? (
								<p className="text-capitalize mb-0" disabled>
									{' '}
									Item Adicionado
								</p>
							) : (
								<i className="fas fa-cart-plus" />
							)}
						</button>
					</div>

					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h3 className="text-blue font-italic mb-0">
							<span className="mr-1">R$</span>
							{price}
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired
}