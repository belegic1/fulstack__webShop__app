import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const Payment = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Account</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<AccountSidebar />
				</div>
				<div className='col-md-9'>
					<div className='box'>
						<center>
							<h1>Pay Offline Using Method</h1>
						</center>
						<hr />
						<div className='table-responsive'>
							<table className='table table-bordered table-hover table-striped'>
								<thead>
									<tr>
										<th>Bank Account Details</th>
										<th>Stripe</th>
										<th>PayPal</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Raifisen: 32312-3432543535</td>
										<td>stripe_mail: 234423-32323</td>
										<td>PayPal_mail:: 234423-32323</td>
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

export default Payment;
