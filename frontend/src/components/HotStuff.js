import React from "react";
import {Link} from "react-router-dom";
import ProductCard from '../components/ProductCard'

import "./css/HotStuff.css";

const HotStuff = () => {
	return (
		<>
			<div id='hot'>
				<div className='box'>
					<div className='container'>
						<div className='col-md-12'>
							<h2 className='text-center'>Latest This Week</h2>
						</div>
					</div>
				</div>
			</div>
			<div id='content' className='container'>
				<div className='row'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</>
	);
};

export default HotStuff;
