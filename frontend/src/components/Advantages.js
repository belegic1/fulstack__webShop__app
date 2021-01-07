import React from "react";
import { Link } from "react-router-dom";

import "./css/Advantages.css";

const Advantages = () => {
	return (
		<div id='advantages'>
			<div className='Advantages container'>
				<div className='Advantages same-height-row'>
					<div className='Advantages col-sm-4'>
						<div className='Advantages box same-height'>
							<div className='Advantages icon'>
								<i className='Advantages fa fa-heart'></i>
							</div>
							<h3>
								<Link to='/'>WE LOVE OUR CUSTOMERS</Link>
							</h3>
							<p>We are know for providing best services</p>
						</div>
					</div>
					<div className='Advantages col-sm-4'>
						<div className='Advantages box same-height'>
							<div className='Advantages icon'>
								<i className='Advantages fa fa-tags'></i>
							</div>
							<h3>
								<Link to=''>BEST PRICES</Link>
							</h3>
							<p>
								You can check prices on all other sites and compare it with
								ours.
							</p>
						</div>
					</div>
					<div className='Advantages col-sm-4'>
						<div className='Advantages box same-height'>
							<div className='Advantages icon'>
								<i className='Advantages fa fa-thumbs-up'></i>
							</div>
							<h3>
								<Link to=''>100% SATISFACTION GUARANTEED</Link>
							</h3>
							<p>30 days money bach guaranteed.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
