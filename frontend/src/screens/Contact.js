import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import "./css/Contact.css";

const Contact = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<ul className='breadcrumb'>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Contact Us</Link>
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
								<h2>Contact Us!</h2>
								<p className='text-muted'>
									If you have any questions please feel free to contact us, our
									customer service works 24/7
								</p>
							</center>
							<form action=''>
								<div className='form-group'>
									<label htmlFor='name'>Name</label>
									<input type='text' required className='form-control' />
								</div>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>
									<input type='email' required className='form-control' />
								</div>
								<div className='form-group'>
									<label htmlFor='subject'>Subject</label>
									<input type='text' required className='form-control' />
								</div>
								<div className='form-group'>
									<label htmlFor='message'>Message</label>
									<textarea className='form-control' name='message'></textarea>
								</div>
								<div className='text-center'>
                                    <button type='submit' className='btn btn-primary'>
                                    <i className="fa fa-user"></i>
									{' '}	Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
