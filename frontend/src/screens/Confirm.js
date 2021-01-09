import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const Confirm = () => {
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
						<h1 align='center'>Please Confirm Payment</h1>
						<form action=''>
							<div className='form-group'>
								<label htmlFor=''>Invoice No</label>
								<input className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor=''>Amount Sent</label>
								<input className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor=''>Select Payment Method</label>
								<select name="" id="" className="form-control">
								<option value="">PayPal</option>
								<option value="">Stripe</option>
								<option value="">On Delivery</option>
								</select>
							</div>
							<div className='form-group'>
								<label htmlFor=''>Transaction/Reference Id</label>
								<input className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor=''>Easy Paisa/Omni Code</label>
								<input className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor=''>Payment Date</label>
								<input className='form-control' />
							</div>
							<div className="text-center">
							<button className="btn btn-primary btn-large" type='submit'><i className="fa fa-user-md"></i> {' '}Confirm Payment </button></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
