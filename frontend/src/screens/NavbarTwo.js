import React from "react";
import { Link } from "react-router-dom";

import "./css/NavbarTwo.css";

const NavbarTwo = () => {
	return (
		<>
			<nav className='Header__two navbar navbar-expand-lg navbar-light bg-light'>
				<div className='Header__two container-fluid'>
					<Link className='Header__two navbar-brand' to='#'>
						Home
					</Link>
					<button
						className='Header__two navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='Header__two navbar-toggler-icon'></span>
					</button>
					<div
						className='Header__two collapse navbar-collapse'
						id='navbarSupportedContent'
					>
						<ul className='Header__two navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='Header__two dropdown-item'>
								<Link to='/'>Home</Link>
							</li>
							<li className='Header__two dropdown-item'>
								<Link to='/shop'>Shop</Link>
							</li>
							<li className='Header__two dropdown-item'>
								<Link to='/account'>My Account</Link>
							</li>
							<li className='Header__two dropdown-item'>
								<Link to='/cart'>Shopping Cart</Link>
							</li>
							<li className='Header__two dropdown-item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul>
						<form className='Header__two d-flex'>
							<input
								className='Header__two form-control me-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='Header__two btn btn-outline-success' type='submit'>
								<i className='Header__two fa fa-search'></i>
							</button>
						</form>
					</div>
					<Link
						className='Header__two btn navbar-btn right  btn-success'
						to='/cart'
					>
						<i className='Header__two fa fa-shopping-cart'></i>
						<span> 4 items in cart</span>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default NavbarTwo;
