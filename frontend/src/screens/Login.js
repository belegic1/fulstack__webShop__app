import React from 'react'
import { Link} from 'react-router-dom'

import Sidebar from '../components/Sidebar'
const Login = () => {
    return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<ul className='breadcrumb'>
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Login</Link>
							</li>
						</ul>
					</div>
					<div className='col-md-3'>
						<Sidebar />
					</div>
					<div className='col-md-9'>
						<div className='box'>
							<div className='box-header'>
								<center>
									<h2>Login</h2>
								</center>
								<form action=''>
								
									<div className='form-group'>
										<label htmlFor='email'>Email</label>
										<input type='email' required className='form-control' />
									</div>
									<div className='form-group'>
										<label htmlFor='password'>Password</label>
										<input type='password' required className='form-control' />
									</div>
									
									<div className='text-center'>
										<button type='submit' className='btn btn-primary'>
											<i className='fa fa-user'></i> Register
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Login
