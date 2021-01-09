import React from 'react'
import {Link} from 'react-router-dom'

const MooreStuff = () => {
    return (
			<div id='same-height'>
				<div className='col-md-3 col-sm-6'>
					<div className='box same-height headline'>
						<h3 className='text-center'>You also may like this</h3>
					</div>
				</div>
				<div className='center-responsive col-md-3 col-sm-6'>
					<div className='product same-height'>
						<Link to='product'>
							<img
								src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
								alt=''
								className='img-responsive'
							/>
						</Link>
						<div className='text'>
							<h3>
								<Link to='/product'>Product</Link>
							</h3>
							<p className='price'>€50</p>
						</div>
					</div>
				</div>
				<div className='center-responsive col-md-3 col-sm-6'>
					<div className='product same-height'>
						<Link to='product'>
							<img
								src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
								alt=''
								className='img-responsive'
							/>
						</Link>
						<div className='text'>
							<h3>
								<Link to='/product'>Product</Link>
							</h3>
							<p className='price'>€50</p>
						</div>
					</div>
				</div>
				<div className='center-responsive col-md-3 col-sm-6'>
					<div className='product same-height'>
						<Link to='product'>
							<img
								src='https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
								alt=''
								className='img-responsive'
							/>
						</Link>
						<div className='text'>
							<h3>
								<Link to='/product'>Product</Link>
							</h3>
							<p className='price'>€50</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default MooreStuff
