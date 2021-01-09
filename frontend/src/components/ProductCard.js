import React from 'react'

import {Link} from 'react-router-dom'

const ProductCard = () => {
    return (
			<div className='col-sm-4 col-sm-6 single center-responsive'>
				<div className='product'>
					<Link to='/product'>
						<img
							src='https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
							alt=''
							className='img-responsive'
						/>
					</Link>
					<div className='text'>
						<h3>
							<Link to='/product'>Product</Link>
						</h3>
						<p className='price'>€50</p>
						<p className='buttons'>
							<Link to='/product' className='btn btn-default'>
								View Details
							</Link>
							<Link to='/product' className='btn btn-primary'>
								<i className='fa fa-shopping-cart'></i> Add to cart
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
}

export default ProductCard
