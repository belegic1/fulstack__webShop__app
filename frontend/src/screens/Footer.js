import React from "react";
import { Link } from "react-router-dom";

import "./css/Footer.css";

const Footer = () => {
	return (
		<>
			<footer id='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-sm-6'>
							<h4>Pages</h4>
							<ul>
								<li>
									<Link to='/cart'>Shopping Cart</Link>
								</li>
								<li>
									<Link to='/contact'>Contact Us</Link>
								</li>
								<li>
									<Link to='/shop'>Shop</Link>
								</li>
								<li>
									<Link to='/profile'>My Account</Link>
								</li>
							</ul>
							<hr />
							<h4>User Section</h4>
							<ul>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/register'>Register</Link>
								</li>
							</ul>
							<hr className='hidden-md hidden-lg' />
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<h4>Top Products Categories</h4>
						<ul>
							<li>
								<Link to='/'>Jackets</Link>
							</li>
							<li>
								<Link to='/'>Accessories</Link>
							</li>
							<li>
								<Link to='/'>Shoes</Link>
							</li>
							<li>
								<Link to='/'>Coats</Link>
							</li>
							<li>
								<Link to='/'>T-Shirts</Link>
							</li>
						</ul>
						<hr className='hidden-md hidden-lg ' />
					</div>
					<div className='col-md-3 col-sm-6'>
						<h4>Where to Find Us</h4>
						<p>
							<strong>Belegic Ltd.</strong>
							<br />
							Serbia
							<br />
							Kladovo
							<br />
							www.webso@gmail.com
							<br />
							<strong>Dragan Belegic</strong>
						</p>
						<Link to='/contact'>Contact Us</Link>
					</div>
					<hr className='hidden-md hidden-lg ' />
					<div className='col-md-3-col-sm-6'>
						<h4>Get the news.</h4>
						<p className='text-muted'>We are here for you 24/7.</p>
						<form action=''>
							<div className='input-group'>
								<input
									type='email'
									className='form-control'
									placeholder='email'
								/>
								<span className='input-group-btn'>
									<button type='submit' className='btn btn-default'>
										Subscribe
									</button>
								</span>
							</div>
						</form>
						<hr />
						<h4>Stay in touch</h4>
						<p className='social'>
							<Link>
								{" "}
								<i className='fab fa-facebook'></i>
							</Link>
							<Link>
								{" "}
								<i className='fab fa-instagram'></i>
							</Link>
							<Link>
								{" "}
								<i className='fab fa-linkedin'></i>
							</Link>
							<Link>
								{" "}
								<i className='fab fa-github'></i>
							</Link>
						</p>
					</div>
				</div>
			</footer>
			<footer id='copyright'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<p className='pull-left'>
								&copy; 2021 Dragan
								Belegic{" "}
							</p>
						</div>
						<div className='col-md-6'>
							<p className='pull-right'>
								Created by <Link to='/'>Belegic</Link>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
