import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const ChangePassword = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Change Password</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<AccountSidebar />
				</div>
				<div className='col-md-9'>
					<h1 align='center'>Change Your Password</h1>
					<form action=''>
						{" "}
						<div className='form-group'>
							<label htmlFor='password'>Current Password</label>
							<input type='password' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='confirmPassword'>New Password</label>
							<input type='password' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='confirmPassword'>Confirm New Password</label>
							<input type='password' required className='form-control' />
						</div>
						<div className='text-center'>
							<button type='submit' className='btn btn-primary'>
								<i className='fas fa-key'></i> Confirm
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
