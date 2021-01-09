import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const DeleteAccount = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Delete Account</Link>
						</li>
					</ul>
				</div>
				<div className='col-md-3'>
					<AccountSidebar />
				</div>
				<div className='col-md-9'>
					<div className='box'>
						<center>
							<h1>Are you sure?</h1>
							<form action=''>
								<input
									type='submit'
									className='btn btn-danger mx-3'
									name='yes'
									value='Delete'
								/>
								<input
									type='submit'
									className='btn btn-primary'
									name='no'
									value='Cancel'
								/>
							</form>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteAccount;
