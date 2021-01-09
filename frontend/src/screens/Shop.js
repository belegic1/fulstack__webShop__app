import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

import "./css/Shop.css";

const Shop = () => {
	return (
		<div id='shopContent'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<ul className='breadcrumb'>
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Shop</Link>
							</li>
						</ul>
					</div>
					<div className='col-md-3'>
						<Sidebar />
					</div>
					<div className='col-md-9'>
						<div className='box'>
							<h1>Shop</h1>
							<p>We sell the best stuff in the world.</p>
						</div>
						<div className='row'>
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
					</div>
				</div>
				<center>
					<ul className='pagination'>
					<li><Link to='/shop'>First Page</Link></li>
					<li><Link to='/shop'>2</Link></li>
					<li><Link to='/shop'>3</Link></li>
					<li><Link to='/shop'>4</Link></li>
					<li><Link to='/shop'>5</Link></li>
					<li><Link to='/shop'>Last Page</Link></li>
					</ul>
				</center>
			</div>
		</div>
	);
};

export default Shop;
