import React, { useState } from 'react';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevents the default form submission
		// Clear the form fields
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};
	const Black=()=>{
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	return (
		<section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>Contact Me</h2>
			</div>
			<div className="container divblock">
				<div className="contact-content">
					<div className="row added p">
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-form">
									<form onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														id="name"
														placeholder="Name*"
														name="name"
														value={name}
														onChange={(e) => setName(e.target.value)}
													/>
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input
														type="email"
														className="form-control"
														id="email"
														placeholder="Email*"
														name="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														id="subject"
														placeholder="Subject"
														name="subject"
														value={subject}
														onChange={(e) => setSubject(e.target.value)}
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea
														className="form-control"
														rows="8"
														id="comment"
														placeholder="Message"
														value={message}
														onChange={(e) => setMessage(e.target.value)}
													></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<button type="submit" className="contact-btn" onClick={Black}>
														Submit
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-address">
									<div className="contact-add-head">
										<h3 className='m'>Vishnu R</h3>
										<p>Full Stack Developer</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>Phone</h3>
											<p>9944874776</p>
										</div>
										<div className="single-contact-add-info">
											<h3 className='m'>Email</h3>
											<p>vishnuvr22001@gmail.com</p>
										</div>
									</div>
								</div>
								<div className="hm-foot-icon">
									<ul>
										<li className='b'>
											<a href="https://www.facebook.com/profile.php?id=100016464694081"  className='m'>
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li className='b'>
											<a href="https://wa.me/919944874776" className='m'>
												<i className="fa fa-whatsapp"></i>
											</a>
										</li>
										<li className='b'>
											<a href="https://github.com/visin04" className='m'>
												<i className="fa fa-github"></i>
											</a>
										</li>
										<li className='b'>
											<a href="https://www.linkedin.com/in/vishnu-r-67414127b/" className='m'>
												<i className="fa fa-linkedin"></i>
											</a>
										</li>
										<li className='b'>
											<a href="https://www.instagram.com/i.m__visin.no__/">
												<i className="fa fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
