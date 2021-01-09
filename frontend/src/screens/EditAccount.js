import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const EditAccount = () => {
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
					<h1 align='center'>Edit Your Account</h1>
					<form action='' className='mb-4'>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input type='text' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input type='email' required className='form-control' />
						</div>
						
						<div className='form-group'>
							<label htmlFor='country'>Country</label>
							<input type='text' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='city'>City</label>
							<input type='text' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='phone'>Phone</label>
							<input type='text' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='address'>Address</label>
							<input type='text' required className='form-control' />
						</div>
						<div className='form-group'>
							<label htmlFor='image'>Image</label>
							<input type='file' className='form-control' />
						</div>

						<div className='text-center'>
							<button type='submit' className='btn btn-primary'>
								<i className='fa fa-user'></i> Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditAccount;
