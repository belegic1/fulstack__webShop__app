import React from "react";
import { Link } from "react-router-dom";

import "./css/Sidebar.css";
const Sidebar = () => {
	return (
		<>
			<div className='panel panel-default sidebar-menu'>
				<div className='panel-heading'>
					<h3 className='panel-title'>Products Categories</h3>
				</div>
				<div className='panel-body'>
					<ul className='nav nav-pills stacked category-menu'>
						<li>
							<Link>Jackets</Link>
						</li>
						<li>
							<Link>Accessories</Link>
						</li>
						<li>
							<Link>Shoes</Link>
						</li>
						<li>
							<Link>Coats</Link>
						</li>
						<li>
							<Link>T-Shirts</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='panel panel-default sidebar-menu'>
				<div className='panel-heading'>
					<h3 className='panel-title'>Categories</h3>
				</div>
				<div className='panel-body'>
					<ul className='nav nav-pills nav-stacked category-menu'>
						<li>
							<Link>Men</Link>
						</li>
						<li>
							<Link>Women</Link>
						</li>
						<li>
							<Link>Kids</Link>
						</li>
						<li>
							<Link>Others</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
