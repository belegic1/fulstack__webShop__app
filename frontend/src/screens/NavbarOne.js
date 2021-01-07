import React from 'react'
import {Link} from 'react-router-dom'

import './css/NavbarOne.css'

const NavbarOne = () => {
    return (
			<div id='top'>
				<div className='Header__one container'>
					<div className='Header__one row'>
						<div className='Header__one col-md-6 offer'>
							<Link to='#' className='Header__one btn btn-success btn-sm'>
								{" "}
								Welcome : Guest
							</Link>
							<Link to=''> Shopping Cart Total Price: $100, Total Items 2</Link>
						</div>
						<div className='Header__one col-md-6'>
							<ul className='Header__one menu'>
								<li>
									<Link to=''>Register</Link>
								</li>
								<li>
									<Link to=''>My Account</Link>
								</li>
								<li>
									<Link to=''>Cart</Link>
								</li>
								<li>
									<Link to=''>Login</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
}

export default NavbarOne
