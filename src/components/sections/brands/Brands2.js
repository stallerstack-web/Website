import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import getTechStacks from "@/libs/getTechStacks";

const Brands2 = () => {
	const techStacks = getTechStacks();
	return (
		<section className="tj-client-section section-top-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
							style={{ maxWidth: "1000px" }}
						>
							<h5 className="sec-title">
								Our Core Specialized <span className="client-text">Technology Stack</span> For Modern Solutions
							</h5>
						</div>
						<div className="wow fadeInUp" data-wow-delay=".5s">
							<BrandSlider1 data={techStacks} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands2;
