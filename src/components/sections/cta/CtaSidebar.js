import Link from "next/link";

const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Ready to<br />Scale?</h2>
				<span>Build Your Dream App</span>
				<Link className="read-more feature-contact" href="/contact">
					<i className="tji-envelop-2"></i>
					<span>Contact Us</span>
				</Link>
			</div>
			<div className="feature-images">
				<img src="/images/about/about-6.png" alt="Build App" />
			</div>
		</div>
	);
};

export default CtaSidebar;
