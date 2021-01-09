import React from "react";
import { Link } from "react-router-dom";

import MooreStuff from "../components/MooreStuff";

import "./css/Cart.css";
const Cart = () => {
	return (
		<div className='container'>
			<div className='row'>
				{" "}
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Cart</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-9' id='cart'>
					<div className='box'>
						<form action='' encType='multipart-form-data'>
							<h1>Shopping Cart</h1>
							<p className='text-muted'>
								Currently you have 3 items in your cart.
							</p>
							<div className='table-responsive'>
								<table className='table'>
									<thead>
										<tr>
											<th colspan='2'>Product</th>
											<th>Quantity</th>
											<th>Price</th>
											<th>Size</th>
											<th colspan='1'>Delete</th>
											<th colspan='2'>Subtotal</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img
													src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
													alt=''
												/>
											</td>
											<td>
												<Link to='/product'>Product</Link>
											</td>
											<td>1</td>
											<td>€50</td>
											<td>XL</td>
											<td>
												<button className='btn btn-danger btn-sm'>
													Remove
												</button>
											</td>
											<td>€100</td>
										</tr>
										<tr>
											<td>
												<img
													src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
													alt=''
												/>
											</td>
											<td>
												<Link to='/product'>Product</Link>
											</td>
											<td>1</td>
											<td>€50</td>
											<td>XL</td>
											<td>
												<button className='btn btn-danger btn-sm'>
													Remove
												</button>
											</td>
											<td>€100</td>
										</tr>
										<tr>
											<td>
												<img
													src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
													alt=''
												/>
											</td>
											<td>
												<Link to='/product'>Product</Link>
											</td>
											<td>1</td>
											<td>€50</td>
											<td>XL</td>
											<td>
												<button className='btn btn-danger btn-sm'>
													Remove
												</button>
											</td>
											<td>€100</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th colspan='5'>Total</th>
											<th colspan='2'>€300</th>
										</tr>
									</tfoot>
								</table>
							</div>
							<div className='box-footer'>
								<div className='pull-left'>
									<Link to='/shop' className='btn btn-default'>
										<i className='fa fa-chevron-left'></i> Continue Shopping
									</Link>
								</div>
								<div className='pull-right'>
									<button type='submit' className='btn btn-default'>
										<i className='fas fa-redo-alt'></i>Update Cart{" "}
									</button>
									<Link to='/checkout' className='btn btn-primary mx-3'>
										Proceed to Checkout <i className='fa fa-chevron-right'></i>
									</Link>
								</div>
							</div>
						</form>
					</div>
					<MooreStuff />
				</div>
				<div className='col-md-3'>
					<div className='box' id='order-summary'>
						<div className='box-header'>
							<h3>Order Summary</h3>
						</div>
						<p className='text-muted'>
							When you buy at our online store all shippings are totally FREE
						</p>
						<div className='table-responsive'>
							<table className='table'>
								<tbody>
									<tr>
										<td>Order Subtotal</td>
										<th>€300</th>
									</tr>
									<tr>
										<td>Shipping and handling</td>
										<td>€0</td>
									</tr>
									<tr>
										<td>Tax</td>
										<th>€0</th>
									</tr>
									<tr className='total'>
                                        <td>Total</td>
                                        <th>€300</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
