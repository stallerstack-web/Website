import Link from "next/link";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo-d.svg" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										StallerStack is a full-service IT company delivering world-class web development, cloud solutions, cybersecurity, and AI innovation to businesses worldwide.
									</p>
								</div>
								<div className="award-logo-area">
									<div className="award-logo">
										<img src="/images/footer/award-logo-1.webp" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Services</h5>
								<ul>
									<li>
										<Link href="/services/1">Web & App Development</Link>
									</li>
									<li>
										<Link href="/services/2">Cloud & DevOps</Link>
									</li>
									<li>
										<Link href="/services/3">Cybersecurity</Link>
									</li>
									<li>
										<Link href="/services/4">AI & ML Solutions</Link>
									</li>
									<li>
										<Link href="/services/5">IT Consulting</Link>
									</li>
									<li>
										<Link href="/services/6">24/7 Support</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Resources</h5>
								<ul>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/team">Our Team</Link>
									</li>
									<li>
										<Link href="#">Careers</Link>
									</li>
									<li>
										<Link href="/blogs">
											Blogs <span className="badge">New</span>
										</Link>
									</li>
									<li>
										<Link href="/contact">Contact Us</Link>
									</li>
									<li>
										<Link href="/privacy-policy">Privacy Policy</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div
								className="footer-widget wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Our Office</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span style={{ color: "var(--tj-color-text, #666)" }}>5 Penn Plaza, 14th Floor, Newyork, NY , 10001 United States 🇺🇸, USA.</span>
									</div>
									<div className="contact-item">
										<Link href="tel:10095447818" style={{ color: "var(--tj-color-text, #666)" }}>P: +1 (009) 544-7818</Link>
										<br />
										<Link href="mailto:Hello@stallerstack.us" style={{ color: "var(--tj-color-text, #666)" }}>
											M: Hello@stallerstack.us
										</Link>
									</div>
									<div className="contact-item">
										<span style={{ color: "var(--tj-color-text, #666)" }}>
											<i className="tji-clock"></i> Mon-Fri 10am-7pm
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="/privacy-policy">
												<span className="text">Privacy Policy</span>
											</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">
												<span className="text">Terms & Condition</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2025
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Staller Stack
										</Link>{" "}
										All right reserved
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
