import React from 'react'

import './css/Slider.css'

const Slider = () => {
    return (
			<div className='SLIDER container' id='slider'>
				<div className='SLIDER row'>
					<div className='SLIDER col-md-12'>
						<div
							id='carouselExampleIndicators'
							className='SLIDER carousel slide'
							data-bs-ride='carousel'
							>
							<ol className='SLIDER carousel-indicators'>
								<li
									data-bs-target='#carouselExampleIndicators'
									data-bs-slide-to='0'
									className='SLIDER active'
								></li>
								<li
									data-bs-target='#carouselExampleIndicators'
									data-bs-slide-to='1'
								></li>
								<li
									data-bs-target='#carouselExampleIndicators'
									data-bs-slide-to='2'
								></li>
							</ol>
							<div className='SLIDER carousel-inner'>
								<div className='SLIDER carousel-item active'>
									<img
										src='https://images.unsplash.com/photo-1586329501141-c0a435d6c0bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
										className='SLIDER d-block w-100'
										alt='...'
									/>
								</div>
								<div className='SLIDER carousel-item'>
									<img
										src='https://images.unsplash.com/photo-1532295454114-d7bc89024613?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
										className='SLIDER d-block w-100'
										alt='...'
									/>
								</div>
								<div className='SLIDER carousel-item'>
									<img
										src='https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
										className='SLIDER d-block w-100'
										alt='...'
									/>
								</div>
							</div>
							<a
								className='SLIDER carousel-control-prev'
								href='#carouselExampleIndicators'
								role='button'
								data-bs-slide='prev'
							>
								<span
									className='SLIDER carousel-control-prev-icon'
									aria-hidden='true'
								></span>
								<span className='SLIDER visually-hidden'>Previous</span>
							</a>
							<a
								className='SLIDER carousel-control-next'
								href='#carouselExampleIndicators'
								role='button'
								data-bs-slide='next'
							>
								<span
									className='SLIDER carousel-control-next-icon'
									aria-hidden='true'
								></span>
								<span className='SLIDER visually-hidden'>Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Slider
