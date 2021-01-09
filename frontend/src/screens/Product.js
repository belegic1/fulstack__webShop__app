import React from "react";
import { Link } from "react-router-dom";

import "./css/Product.css";
import Sidebar from "../components/Sidebar";
import MooreStuff from "../components/MooreStuff";

const Product = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Shop</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<Sidebar />
				</div>
				<div className='col-md-9'>
					<div className='row' id='productMain'>
						<div className='col-sm-6'>
							<div id='mainImage'>
								<div
									id='carouselExampleControls'
									className='carousel slide'
									data-bs-ride='carousel'
								>
									<div className='carousel-inner'>
										<div className='carousel-item active'>
											<img
												src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item'>
											<img
												src='https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item'>
											<img
												src='https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
												className='d-block w-100'
												alt='...'
											/>
										</div>
									</div>
									<a
										className='carousel-control-prev'
										href='#carouselExampleControls'
										role='button'
										data-bs-slide='prev'
									>
										<span
											className='carousel-control-prev-icon'
											aria-hidden='true'
										></span>
										<span className='visually-hidden'>Previous</span>
									</a>
									<a
										className='carousel-control-next'
										href='#carouselExampleControls'
										role='button'
										data-bs-slide='next'
									>
										<span
											className='carousel-control-next-icon'
											aria-hidden='true'
										></span>
										<span className='visually-hidden'>Next</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='box'>
								<h1 className='text-center'>Product Name</h1>
								<form action='' className='form-horizontal'>
									<div className='form-group'>
										<label htmlFor='' className='col-md-5 control-label'>
											Quantity
										</label>
										<div className='col-md-7'>
											<select name='' id='' className='form-control'>
												<option value=''>1</option>1<option value=''>2</option>1
												<option value=''>3</option>1
											</select>
										</div>
									</div>
									<div className='form-group'>
										<label htmlFor='' className='col-md-5 control-label'>
											Size
										</label>
										<div className='col-md-7'>
											<select name='' id='' className='form-control'>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
											</select>
										</div>
									</div>
									<p className='price'>€50</p>
									<p className='text-center buttons'>
										<button type='submit' className='btn btn-primary'>
											<i className='fa fa-shopping-cart'></i> Add to cart
										</button>
									</p>
								</form>
							</div>
							<div className='row' id='thumbs'>
								<div className='col-xs-4'>
									<Link className='thumb'>
										<img
											src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
											alt=''
											className='img-responsive'
										/>
									</Link>
								</div>
								<div className='col-xs-4'>
									<Link className='thumb'>
										<img
											src='https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
											alt=''
											className='img-responsive'
										/>
									</Link>
								</div>
								<div className='col-xs-4'>
									<Link className='thumb'>
										<img
											src='https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
											alt=''
											className='img-responsive'
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='box' id='details'>
						<p>
							<h4>Product Details</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
								fugiat vero enim eius exercitationem, facere commodi quam quo
								ratione perferendis!
							</p>
						</p>
						<h4>Size</h4>
						<ul>
							<li>Small</li>
							<li>Medium</li>
							<li>Large</li>
						</ul>
					</div>
					<MooreStuff />
				</div>
			</div>
		</div>
	);
};

export default Product;
