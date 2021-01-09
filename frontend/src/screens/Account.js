import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const Account = () => {
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
                <div className="col-md-3">
                <AccountSidebar />
                </div>
			</div>
		</div>
	);
};

export default Account;
