import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const MyOrders = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>My Orders</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<AccountSidebar />
				</div>
				<div className='col-md-9'>
					<div className='box'>
						<center>
							<h1>Orders</h1>
							<p className='lead'>Your orders in one place</p>
						</center>
						<hr />
						<div className='table-responsive'>
							<table className='table table-bordered'>
								<thead>
									<tr>
										<th>O N:</th>
										<th>Due Amount:</th>
										<th>Invoice No:</th>
										<th>Qty:</th>
										<th>Size:</th>
										<th>Order Date:</th>
										<th>Paid/Unpaid:</th>
										<th>Status:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
                                        <th>#1</th>
                                        <td>€80</td>
                                        <td>5555545453</td>
                                        <td>7</td>
                                        <td>XL</td>
                                        <td>03.01.2020.</td>
                                        <td>Paid</td>
                                        <td>
                                        <Link to='/confirm' className='btn btn-primary btn-sm'>Confirm if paid</Link>
                                        </td>
									</tr>
								</tbody>
								<tbody>
									<tr>
                                        <th>#2</th>
                                        <td>€80</td>
                                        <td>5555545453</td>
                                        <td>7</td>
                                        <td>XL</td>
                                        <td>03.01.2020.</td>
                                        <td>Paid</td>
                                        <td>
                                        <Link to='/confirm' className='btn btn-primary btn-sm'>Confirm if paid</Link>
                                        </td>
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

export default MyOrders;
