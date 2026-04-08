import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
								<h2 className="title title-anim">
									Let’s Build Future Together.
								</h2>
								<div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={"Get Started Now"}
										url={"/contact"}
										className={"btn-dark"}
									/>
								</div>
							</div>
							<div className="cta-img">
								<img src="/images/New-Images/about-us-3.webp" alt="" style={{ width: '100%', maxWidth: '657px', height: '388px', objectFit: 'cover' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
