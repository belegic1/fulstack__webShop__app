import React from "react";
import { Link } from "react-router-dom";

const AccountSidebar = () => {
	return (
		<div className='panel panel-default sidebar-menu'>
			<div className='panel-heading'>
				<center>
					<img
						src='https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
						alt=''
						className='img-responsive'
					/>
				</center>
				<br />
				<h3 className='panel-title' align='center'>
					Name: Haland
				</h3>
			</div>
			<div className='panel-body'>
				<ul className='nav nav-pills stacked'>
					<li className='active'>
						<Link to='/orders'>
							<i className='fa fa-list'></i> My Orders
						</Link>
					</li>
					<li>
						<Link to='/payment'>
							<i className='fa fa-bolt'></i> Payment
						</Link>
					</li>
					
					<li>
						<Link to='/account/edit'>
							<i className='fa fa-pencil-alt'></i> Edit Account
						</Link>
					</li>
					<li>
						<Link to='/account/changePassword'>
							<i className='fa fa-user'></i> Change Password
						</Link>
					</li>
					<li>
						<Link to='/account/delete'>
							<i className='fa fa-trash'></i> Delete Account
						</Link>
					</li>
					<li>
						<Link to='/account/changePassword'>
							<i className='fa fa-sign-out-alt'></i> Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AccountSidebar;
